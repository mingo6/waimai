<?php
 class WeixinPay { public function refund($arr) { goto KSH72; Eybzv: return $rearr; goto cYfct; qYF9A: return $rearr; goto UepKw; GtCI7: $rearr = $this->commonRefund($data); goto hhL37; LKAf1: $rearr = $this->commonRefund($data); goto nLNqq; vaPtW: $data["\164\162\x61\156\163\x61\143\164\151\157\156\137\151\x64"] = $arr["\165\x6f\x72\144\145\162\x69\144"]; goto WmvHI; duh56: if (!($data["\164\x6f\x74\x61\154\x5f\146\145\x65"] < $data["\162\145\146\x75\156\144\x5f\x66\145\x65"])) { goto flwMg; } goto Qsrqc; kjvAs: $data["\x72\x65\x66\x75\156\144\x5f\141\x63\143\x6f\x75\156\164"] = "\122\x45\x46\x55\116\x44\x5f\123\x4f\x55\122\x43\x45\x5f\122\x45\103\110\101\x52\107\105\x5f\x46\x55\116\104\123"; goto bb670; xPVUn: $data["\164\157\x74\x61\x6c\x5f\146\145\145"] = $arr["\x74\x6f\164\x61\154\x6d\x6f\x6e\x65\x79"] * 100; goto QPAsB; hhL37: p4ceL: goto qYF9A; W1qHD: $data["\157\x70\x5f\165\x73\145\162\137\x69\144"] = $setting["\x70\141\171\x6d\x65\156\164"]["\x77\x65\x63\150\141\164"]["\x6d\x63\150\151\144"]; goto xlr7r; QPAsB: $data["\162\x65\x66\165\156\x64\137\x66\145\145"] = $arr["\162\x65\146\x75\156\x64\x6d\157\x6e\x65\171"] * 100; goto ppRSB; WmvHI: $data["\157\x75\164\x5f\x72\145\x66\x75\156\x64\137\156\x6f"] = $arr["\x75\157\162\x64\x65\162\151\144"] . rand(1000, 9999); goto xPVUn; O0ikj: $data["\155\x63\x68\137\151\x64"] = $setting["\160\x61\171\x6d\x65\x6e\x74"]["\167\145\x63\150\x61\x74"]["\x6d\143\x68\x69\144"]; goto vaPtW; Sh6Yr: flwMg: goto LKAf1; ZBdta: $data["\141\x70\160\151\x64"] = $_W["\141\x63\143\x6f\165\x6e\164"]["\x6b\145\171"]; goto O0ikj; eoNH2: $rearr["\162\145\x74\165\x72\156\x5f\x6d\x73\x67"] = "\xe8\257\xb7\xe5\205\x88\345\x9c\xa8\xe5\276\256\346\223\216\347\x9a\x84\xe5\x8a\x9f\350\203\xbd\351\x80\211\xe9\241\xb9\x2d\xe6\x94\257\344\273\230\xe5\x8f\x82\346\225\260\xe5\206\205\350\xae\276\xe7\275\256\xe5\xbe\256\344\277\xa1\345\225\x86\xe6\210\xb7\345\x8f\267\345\x92\x8c\347\247\230\xe9\222\245"; goto Eybzv; YCyc3: if (!(empty($data["\x61\x70\160\151\x64"]) || empty($data["\x6d\x63\x68\137\151\144"]))) { goto bq6Pk; } goto eoNH2; blIkX: $data["\163\151\147\x6e"] = $this->getSign($data); goto YCyc3; KSH72: global $_W; goto a_FE1; cYfct: bq6Pk: goto duh56; a_FE1: $setting = uni_setting($_W["\x75\x6e\x69\x61\x63\151\144"], array("\x70\141\x79\155\x65\x6e\164")); goto ZBdta; Qsrqc: $rearr["\x72\145\164\x75\162\156\x5f\155\163\147"] = "\351\x80\x80\xe6\254\xbe\xe9\x87\221\351\xa2\x9d\xe4\270\215\xe8\x83\275\345\xa4\247\xe4\xba\x8e\xe5\xae\236\xe9\x99\205\xe6\x94\257\344\273\230\xe9\x87\x91\351\xa2\235"; goto Sm76B; xlr7r: $data["\x6e\x6f\156\143\145\x5f\x73\x74\x72"] = $this->createNoncestr(); goto blIkX; nLNqq: if (!($rearr["\x72\x65\x73\x75\154\164\137\143\x6f\144\x65"] == "\x46\101\111\114" && $rearr["\x65\162\x72\137\143\157\144\145"] == "\x4e\x4f\124\x45\116\x4f\125\107\110")) { goto p4ceL; } goto Randb; Randb: unset($data["\x73\151\x67\156"]); goto kjvAs; bb670: $data["\x73\151\147\156"] = $this->getSign($data); goto GtCI7; ppRSB: $data["\x72\145\146\x75\x6e\144\x5f\141\143\143\x6f\165\x6e\x74"] = "\x52\105\106\x55\x4e\x44\137\123\x4f\x55\x52\x43\105\x5f\125\116\123\x45\x54\124\114\x45\104\x5f\x46\x55\116\104\x53"; goto W1qHD; Sm76B: return $rearr; goto Sh6Yr; UepKw: } public function commonRefund($data) { goto MSDem; DqhqM: return $rearr; goto HCQIV; MSDem: $xml = $this->arrayToXml($data); goto bY7vU; XFItr: $re = $this->wxHttpsRequestPem($xml, $url); goto Pt_X4; Pt_X4: $rearr = $this->xmlToArray($re); goto DqhqM; bY7vU: $url = "\150\164\164\160\163\72\x2f\57\141\160\x69\x2e\x6d\x63\150\56\167\145\x69\170\151\x6e\56\161\x71\56\x63\157\x6d\57\163\145\143\x61\160\x69\57\160\141\x79\x2f\162\x65\x66\165\156\144"; goto XFItr; HCQIV: } public function createNoncestr($length = 32) { goto NdTNw; ag5IH: xFA9b: goto V689A; fY0v2: goto ItGJv; goto ag5IH; viqTI: $i = 0; goto Jb012; sG_Fs: if (!($i < $length)) { goto xFA9b; } goto Np5zZ; V689A: return $str; goto asCii; pmYZU: $i++; goto fY0v2; Jb012: ItGJv: goto sG_Fs; iTW0S: $str = ''; goto viqTI; XX3jm: BvAOF: goto pmYZU; NdTNw: $chars = "\x61\x62\143\x64\145\146\x67\150\151\x6a\x6b\x6c\155\x6e\157\160\x71\x72\163\x74\x75\x76\167\170\171\172\x30\x31\62\63\x34\x35\66\67\70\x39"; goto iTW0S; Np5zZ: $str .= substr($chars, mt_rand(0, strlen($chars) - 1), 1); goto XX3jm; asCii: } function formatBizQueryParaMap($paraMap, $urlencode) { goto Ck3tu; aPcAu: vJdjt: goto pY4dV; Ck3tu: $buff = ''; goto YadOz; eEC3k: $reqPar; goto EpWbe; YadOz: ksort($paraMap); goto UZocy; u6px5: Ubps6: goto eEC3k; f9JuH: $reqPar = substr($buff, 0, strlen($buff) - 1); goto aPcAu; UZocy: foreach ($paraMap as $k => $v) { goto KryHY; bF2eX: A9JzE: goto bbUwa; iS2Io: $v = urlencode($v); goto Vkxsq; xkUsa: $buff .= $k . "\x3d" . $v . "\x26"; goto bF2eX; Vkxsq: Gmvpi: goto xkUsa; KryHY: if (!$urlencode) { goto Gmvpi; } goto iS2Io; bbUwa: } goto u6px5; EpWbe: if (!(strlen($buff) > 0)) { goto vJdjt; } goto f9JuH; pY4dV: return $reqPar; goto XpY3g; XpY3g: } public function getSign($Obj) { goto ovdAB; ovdAB: global $_W; goto etHwk; lBGDJ: $result_ = strtoupper($String); goto BIPWO; oJI7k: foreach ($Obj as $k => $v) { $Parameters[$k] = $v; Z6qIi: } goto O5fJt; O5fJt: ncGCG: goto mcSzx; BIPWO: return $result_; goto ITFAu; etHwk: $setting = uni_setting($_W["\165\156\x69\x61\x63\151\x64"], array("\x70\141\x79\155\x65\156\x74")); goto oJI7k; SY9EI: $String = md5($String); goto lBGDJ; nEwoD: $String = $String . "\x26\x6b\145\x79\75" . $setting["\160\141\x79\155\x65\156\x74"]["\x77\x65\143\x68\141\x74"]["\x61\160\x69\x6b\x65\x79"]; goto SY9EI; Asrg1: $String = $this->formatBizQueryParaMap($Parameters, false); goto nEwoD; mcSzx: ksort($Parameters); goto Asrg1; ITFAu: } public function arrayToXml($arr) { goto xJ3kL; k92P_: foreach ($arr as $key => $val) { goto mpKkz; tleNA: JZkWG: goto BGfBG; gLVOL: $xml .= "\x3c" . $key . "\76" . $val . "\74\x2f" . $key . "\x3e"; goto tleNA; kFSsh: $xml .= "\74" . $key . "\76\x3c\41\133\103\104\x41\124\x41\x5b" . $val . "\x5d\x5d\x3e\74\57" . $key . "\x3e"; goto UN_zI; mpKkz: if (is_numeric($val)) { goto fGQam; } goto kFSsh; nlGWh: fGQam: goto gLVOL; UN_zI: goto JZkWG; goto nlGWh; BGfBG: Es82F: goto rF3qa; rF3qa: } goto XbsoJ; vxPUA: return $xml; goto mcrcQ; xJ3kL: $xml = "\x3c\170\x6d\154\x3e"; goto k92P_; tcVwY: $xml .= "\74\57\170\155\154\x3e"; goto vxPUA; XbsoJ: kmHUL: goto tcVwY; mcrcQ: } public function xmlToArray($xml) { $array_data = json_decode(json_encode(simplexml_load_string($xml, "\123\x69\155\160\154\145\x58\x4d\114\x45\154\145\155\145\x6e\x74", LIBXML_NOCDATA)), true); return $array_data; } public function wxHttpsRequestPem($vars, $url, $second = 30, $aHeader = array()) { goto gIeIz; kcSmc: curl_setopt($ch, CURLOPT_TIMEOUT, $second); goto B2NUD; LklTT: curl_setopt($ch, CURLOPT_CAINFO, "\x50\105\115"); goto uICY8; ZT9iJ: curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false); goto tIhqM; WG1LL: curl_close($ch); goto RUaem; accr_: curl_setopt($ch, CURLOPT_SSLKEY, MODULE_ROOT . "\x2f\143\145\x72\x74\x2f" . $_W["\x75\156\151\x61\x63\x69\x64"] . "\57\x61\160\x69\143\x6c\x69\145\156\164\137\153\x65\x79\x2e\x70\x65\x6d"); goto LklTT; INZU7: KvQV0: goto WG1LL; U5JCF: return false; goto xXRy3; sWB3g: curl_setopt($ch, CURLOPT_SSLKEYTYPE, "\x50\x45\x4d"); goto accr_; R7I3Y: $error = curl_errno($ch); goto MW5eN; kSCEV: curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); goto ZT9iJ; abO0y: curl_setopt($ch, CURLOPT_POSTFIELDS, $vars); goto N6eAx; XcN0b: curl_setopt($ch, CURLOPT_SSLCERT, MODULE_ROOT . "\57\143\145\x72\164\57" . $_W["\165\x6e\151\x61\x63\151\x64"] . "\57\141\160\151\x63\x6c\x69\145\x6e\164\137\x63\x65\x72\x74\x2e\160\145\155"); goto sWB3g; RUaem: return $data; goto NYQES; MW5eN: echo "\x63\141\x6c\154\x20\146\141\151\x6c\x64\54\x20\x65\162\162\x6f\x72\x43\x6f\144\x65\x3a{$error}\xa"; goto m7Rv3; xXRy3: goto Is22A; goto INZU7; gIeIz: global $_W; goto KkF0s; XO__b: curl_setopt($ch, CURLOPT_HTTPHEADER, $aHeader); goto X6FY9; KRixi: curl_setopt($ch, CURLOPT_URL, $url); goto kSCEV; N6eAx: $data = curl_exec($ch); goto gYAnP; m7Rv3: curl_close($ch); goto U5JCF; X6FY9: iBi3O: goto toY0C; NYQES: Is22A: goto p6o4T; gYAnP: if ($data) { goto KvQV0; } goto R7I3Y; toY0C: curl_setopt($ch, CURLOPT_POST, 1); goto abO0y; KkF0s: $ch = curl_init(); goto kcSmc; uICY8: if (!(count($aHeader) >= 1)) { goto iBi3O; } goto XO__b; tIhqM: curl_setopt($ch, CURLOPT_SSLCERTTYPE, "\120\x45\115"); goto XcN0b; B2NUD: curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); goto KRixi; p6o4T: } }