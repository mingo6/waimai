<?php
 namespace myclass\dao; class common { protected $table_name; protected $table; public $uniacid; public $each_page = 20; public $params = array(); public function _set($name, $value) { $this->{$name} = $value; } public function setGlobal() { global $_W; $this->uniacid = $_W["\165\x6e\151\141\x63\x69\x64"]; } public function setTable($table_name) { $this->table_name = $table_name; $this->table = tablename($table_name); } public function add($arr) { goto Mf0Hs; vjn0x: pdo_insert($this->table_name, $arr); goto ovOXf; ovOXf: return pdo_insertid(); goto RRm8T; tgecP: $arr["\141\144\x64\137\x74\x69\155\145"] = time(); goto vjn0x; Mf0Hs: $arr["\165\156\x69\141\x63\x69\x64"] = $this->uniacid; goto tgecP; RRm8T: } public function edit($where, $up = false) { goto X6fTl; X6fTl: if (!$up) { goto Bls6d; } goto xZ1QI; CrrHT: thTYD: goto uEW3x; h3uZD: $g = 0; goto uDT1t; M3aGg: return $result; goto PVuWM; uEW3x: $result = pdo_fetch("\x73\x65\x6c\x65\143\164\40\x2a\x20\146\x72\157\155\40" . $this->table . "\40\x77\150\145\162\x65\x20" . $where_str, $params); goto M3aGg; xZ1QI: pdo_update($this->table_name, $up, $where); goto JlU9L; JlU9L: Bls6d: goto h3uZD; uDT1t: foreach ($where as $key => $value) { goto riYSR; Wt26_: ixKbU: goto XudjN; q_J74: KsK6H: goto G5U5z; M1s1M: $g++; goto Wt26_; TUoCg: $where_str .= "\x20\x61\x6e\144\x20"; goto q_J74; wEQ60: $params["\x3a" . $key] = $value; goto M1s1M; riYSR: if (!($g != 0)) { goto KsK6H; } goto TUoCg; G5U5z: $where_str .= $key . "\x3d\72{$key}\x20"; goto wEQ60; XudjN: } goto CrrHT; PVuWM: } public function delete($where, $force = false) { goto UeCth; h3YZD: $where["\165\x6e\x69\141\143\x69\144"] = $this->uniacid; goto Vk31g; Vk31g: quw7w: goto cCk_v; r3uZ6: pdo_delete($this->table_name, $where); goto XINZU; UeCth: if ($force) { goto quw7w; } goto h3YZD; cCk_v: if (!$where) { goto fADCi; } goto r3uZ6; XINZU: fADCi: goto OTf91; OTf91: } public function getList($params, $in_where = false, $pages = 1) { goto aDv9X; GHd7p: $count = pdo_fetchcolumn("\163\145\x6c\145\143\x74\40\x63\x6f\x75\156\x74\50\x61\144\144\137\164\x69\x6d\x65\x29\40\156\x75\x6d\40\x66\162\157\155\40" . $this->table . "\x20\167\150\145\162\145\x20" . $where . "\40\x20", $params); goto o4E5Q; sUYmJ: $where = $where . "\40\x61\x6e\144\x20" . $in_where; goto j0YZ1; llcQB: $limit_sql = ($start - 1) * $this->each_page . "\x2c" . $this->each_page; goto GHd7p; gWFCz: return array("\x63\x6f\165\x6e\x74" => $count, "\x6c\151\x73\x74" => $list); goto x3Jl5; MdGXR: $where = composeParamsToWhere($params); goto I8Qws; j0YZ1: naep4: goto fwLA2; fwLA2: $start = $pages > 0 ? $pages : 1; goto llcQB; I8Qws: if (!$in_where) { goto naep4; } goto sUYmJ; aDv9X: $params["\x3a\165\x6e\151\141\x63\x69\144"] = $this->uniacid; goto MdGXR; o4E5Q: $list = pdo_fetchall("\163\x65\x6c\x65\x63\164\40\x2a\x20\40\x66\x72\157\155\40" . $this->table . "\40\x77\x68\145\x72\x65\x20" . $where . "\x20\157\x72\144\145\x72\x20\142\x79\x20\x61\x64\144\137\164\151\x6d\x65\x20\144\x65\163\143\x20\154\x69\x6d\151\164\x20" . $limit_sql, $params); goto gWFCz; x3Jl5: } public function dataList($params, $in_where = false, $pages = 1) { $this->_set("\145\141\143\150\137\x70\141\147\145", 100000); return $this->getList($params, $in_where, $pages); } }