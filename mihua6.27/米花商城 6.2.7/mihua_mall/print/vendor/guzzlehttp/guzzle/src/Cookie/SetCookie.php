<?php
 namespace GuzzleHttp\Cookie; class SetCookie { private static $defaults = array("\116\141\155\x65" => null, "\126\141\x6c\165\x65" => null, "\x44\157\155\x61\x69\156" => null, "\120\141\164\x68" => "\x2f", "\x4d\x61\170\x2d\101\x67\x65" => null, "\x45\170\160\x69\x72\145\x73" => null, "\x53\145\x63\x75\162\x65" => false, "\104\151\163\143\x61\162\144" => false, "\110\164\x74\160\x4f\156\154\x79" => false); private $data; public static function fromString($cookie) { goto qjEmM; Opl5M: z1ze1: goto cg5kj; qjEmM: $data = self::$defaults; goto pjjL9; TlWT_: if (!(empty($pieces) || !strpos($pieces[0], "\75"))) { goto H2WOz; } goto AR0mQ; AR0mQ: return new self($data); goto M7rJ9; OZB8o: foreach ($pieces as $part) { goto q85OP; aou7R: p3RQ9: goto SZKYz; Xo_uF: $data["\x4e\141\155\x65"] = $key; goto visK3; OKRc4: foreach (array_keys(self::$defaults) as $search) { goto yMDky; cc5u_: $data[$search] = $value; goto TR5hr; TR5hr: goto p3RQ9; goto RR0UB; yMDky: if (strcasecmp($search, $key)) { goto erUm2; } goto cc5u_; RR0UB: erUm2: goto jM0hR; jM0hR: Mnc46: goto kxrbH; kxrbH: } goto hsUKp; hsUKp: PH3K5: goto anyAZ; zO3e3: $value = isset($cookieParts[1]) ? trim($cookieParts[1], "\40\12\xd\x9\0\xb") : true; goto l6eGa; eaYIL: goto Q354C; goto aa_zo; anyAZ: $data[$key] = $value; goto eaYIL; aa_zo: BlCC9: goto Xo_uF; visK3: $data["\126\141\x6c\165\x65"] = $value; goto FTSVZ; FTSVZ: Q354C: goto aou7R; vEp1k: $key = trim($cookieParts[0]); goto zO3e3; l6eGa: if (empty($data["\x4e\141\x6d\145"])) { goto BlCC9; } goto OKRc4; q85OP: $cookieParts = explode("\75", $part, 2); goto vEp1k; SZKYz: } goto Opl5M; cg5kj: return new self($data); goto jgxAH; M7rJ9: H2WOz: goto OZB8o; pjjL9: $pieces = array_filter(array_map("\164\162\151\x6d", explode("\x3b", $cookie))); goto TlWT_; jgxAH: } public function __construct(array $data = array()) { goto hs7Jc; j_Hf3: goto F5VK8; goto DxMC6; p70Fy: goto F5VK8; goto YKgcS; YgUEf: if ($this->getExpires() && !is_numeric($this->getExpires())) { goto HX6mH; } goto p70Fy; DxMC6: HX6mH: goto viRQm; YKgcS: Qs4Es: goto vvW6B; mj2zj: F5VK8: goto fVnGJ; viRQm: $this->setExpires($this->getExpires()); goto mj2zj; hs7Jc: $this->data = array_replace(self::$defaults, $data); goto vToaW; vToaW: if (!$this->getExpires() && $this->getMaxAge()) { goto Qs4Es; } goto YgUEf; vvW6B: $this->setExpires(time() + $this->getMaxAge()); goto j_Hf3; fVnGJ: } public function __toString() { goto Uvuob; Uvuob: $str = $this->data["\x4e\141\x6d\x65"] . "\x3d" . $this->data["\126\x61\x6c\165\145"] . "\73\x20"; goto hYgmY; Rw8QW: qow6E: goto XjHPO; XjHPO: return rtrim($str, "\x3b\x20"); goto Nl9i3; hYgmY: foreach ($this->data as $k => $v) { goto aYwxy; B0Fsy: bbMPs: goto CoMyT; ZDyy3: $str .= ($v === true ? $k : "{$k}\75{$v}") . "\x3b\x20"; goto O1IOn; JjIcq: $str .= "\x45\x78\x70\151\x72\145\163\75" . gmdate("\x44\54\40\x64\x20\115\40\x59\x20\x48\x3a\151\72\163\x20\x5c\x47\x5c\115\x5c\124", $v) . "\x3b\40"; goto JzQRf; aYwxy: if (!($k !== "\x4e\x61\155\x65" && $k !== "\126\x61\x6c\165\x65" && $v !== null && $v !== false)) { goto T1BQ_; } goto OvAav; XiURR: T1BQ_: goto B0Fsy; iOrdw: WZZ7k: goto JjIcq; O1IOn: goto uj0cz; goto iOrdw; JzQRf: uj0cz: goto XiURR; OvAav: if ($k === "\x45\x78\160\x69\x72\145\x73") { goto WZZ7k; } goto ZDyy3; CoMyT: } goto Rw8QW; Nl9i3: } public function toArray() { return $this->data; } public function getName() { return $this->data["\x4e\x61\x6d\145"]; } public function setName($name) { $this->data["\x4e\x61\x6d\145"] = $name; } public function getValue() { return $this->data["\x56\141\x6c\165\x65"]; } public function setValue($value) { $this->data["\126\x61\154\x75\x65"] = $value; } public function getDomain() { return $this->data["\x44\x6f\x6d\141\151\156"]; } public function setDomain($domain) { $this->data["\104\x6f\x6d\x61\x69\156"] = $domain; } public function getPath() { return $this->data["\120\x61\164\x68"]; } public function setPath($path) { $this->data["\120\141\x74\150"] = $path; } public function getMaxAge() { return $this->data["\x4d\141\x78\55\101\147\145"]; } public function setMaxAge($maxAge) { $this->data["\115\x61\170\x2d\x41\x67\145"] = $maxAge; } public function getExpires() { return $this->data["\105\170\160\x69\x72\x65\x73"]; } public function setExpires($timestamp) { $this->data["\x45\x78\x70\x69\162\145\x73"] = is_numeric($timestamp) ? (int) $timestamp : strtotime($timestamp); } public function getSecure() { return $this->data["\x53\x65\143\x75\x72\145"]; } public function setSecure($secure) { $this->data["\x53\145\143\x75\162\x65"] = $secure; } public function getDiscard() { return $this->data["\x44\151\163\143\x61\162\x64"]; } public function setDiscard($discard) { $this->data["\x44\151\x73\x63\141\162\144"] = $discard; } public function getHttpOnly() { return $this->data["\110\164\x74\x70\117\x6e\x6c\x79"]; } public function setHttpOnly($httpOnly) { $this->data["\x48\164\164\x70\x4f\156\154\x79"] = $httpOnly; } public function matchesPath($requestPath) { goto yaYUp; QYpGO: Y0WsS: goto JWh4Q; UacBZ: if (!(0 !== strpos($requestPath, $cookiePath))) { goto acFUq; } goto bydtt; bydtt: return false; goto S0Cw3; jQA07: return true; goto QYpGO; JWh4Q: return substr($requestPath, strlen($cookiePath), 1) === "\x2f"; goto HHsn4; qB1DM: iW_rj: goto UacBZ; l5VLS: return true; goto qB1DM; S0Cw3: acFUq: goto ATDrV; ATDrV: if (!(substr($cookiePath, -1, 1) === "\57")) { goto Y0WsS; } goto jQA07; yaYUp: $cookiePath = $this->getPath(); goto yVaOL; yVaOL: if (!($cookiePath === "\x2f" || $cookiePath == $requestPath)) { goto iW_rj; } goto l5VLS; HHsn4: } public function matchesDomain($domain) { goto MhJjZ; H794z: toV5k: goto yyT00; MhJjZ: $cookieDomain = ltrim($this->getDomain(), "\56"); goto FJ38D; DIdeb: return true; goto D2Ke7; bZbos: if (!filter_var($domain, FILTER_VALIDATE_IP)) { goto toV5k; } goto gKUrd; yyT00: return (bool) preg_match("\x2f\134\x2e" . preg_quote($cookieDomain) . "\x24\x2f", $domain); goto nd7xD; FJ38D: if (!(!$cookieDomain || !strcasecmp($domain, $cookieDomain))) { goto cFKwW; } goto DIdeb; gKUrd: return false; goto H794z; D2Ke7: cFKwW: goto bZbos; nd7xD: } public function isExpired() { return $this->getExpires() && time() > $this->getExpires(); } public function validate() { goto UcfWw; e6bXd: bZ5FN: goto L3JgE; rIgK8: $domain = $this->getDomain(); goto j0kbd; pyoiO: if (!(empty($name) && !is_numeric($name))) { goto bf08v; } goto JEgrB; j0kbd: if (!(empty($domain) && !is_numeric($domain))) { goto bZ5FN; } goto hWijv; dM9Kq: return "\x54\x68\x65\40\x63\x6f\x6f\153\151\x65\x20\166\x61\154\x75\145\x20\x6d\165\163\164\40\x6e\x6f\x74\40\x62\x65\x20\145\155\160\x74\x79"; goto TIalP; UcfWw: $name = $this->getName(); goto pyoiO; sv720: MbHtw: goto Rxp4B; RUPY9: if (!(empty($value) && !is_numeric($value))) { goto qCVEr; } goto dM9Kq; TIalP: qCVEr: goto rIgK8; Rxp4B: $value = $this->getValue(); goto RUPY9; JEgrB: return "\124\150\145\x20\143\157\x6f\x6b\x69\145\40\x6e\141\155\x65\40\x6d\x75\x73\x74\40\156\157\x74\x20\x62\x65\x20\145\155\x70\x74\171"; goto okIQu; gBgOj: if (!preg_match("\x2f\x5b\x5c\170\x30\60\x2d\x5c\170\x32\60\134\x78\62\62\x5c\170\x32\70\55\x5c\x78\x32\x39\134\170\62\143\x5c\x78\62\x66\x5c\170\63\141\x2d\x5c\x78\x34\60\x5c\170\65\143\134\170\x37\x62\x5c\x78\x37\144\134\x78\x37\x66\135\57", $name)) { goto MbHtw; } goto RUokw; L3JgE: return true; goto dgMKn; okIQu: bf08v: goto gBgOj; RUokw: return "\103\x6f\157\x6b\x69\145\40\x6e\x61\155\145\x20\155\x75\163\164\x20\156\157\164\40\143\157\156\164\141\x69\x6e\40\151\156\166\141\x6c\151\x64\x20\143\150\x61\162\141\x63\x74\145\162\163\x3a\x20\x41\123\103\x49\x49\x20" . "\x43\x6f\156\x74\162\157\x6c\x20\x63\x68\141\x72\141\x63\x74\x65\x72\x73\x20\50\x30\55\x33\x31\x3b\61\x32\x37\x29\54\x20\163\x70\141\143\x65\x2c\x20\164\141\142\x20\x61\156\x64\x20\x74\150\145\40" . "\146\x6f\154\154\x6f\167\151\156\x67\x20\143\x68\x61\162\141\143\164\145\162\x73\x3a\40\50\51\x3c\x3e\x40\x2c\x3b\x3a\x5c\42\x2f\x3f\x3d\x7b\x7d"; goto sv720; hWijv: return "\124\150\x65\x20\x63\x6f\x6f\x6b\x69\x65\x20\x64\x6f\155\x61\151\156\x20\155\x75\x73\164\40\156\x6f\x74\x20\x62\x65\40\145\x6d\x70\x74\171"; goto e6bXd; dgMKn: } }