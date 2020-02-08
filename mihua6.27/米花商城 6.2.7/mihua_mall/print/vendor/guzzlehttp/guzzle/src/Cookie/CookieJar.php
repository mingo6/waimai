<?php
 namespace GuzzleHttp\Cookie; use Psr\Http\Message\RequestInterface; use Psr\Http\Message\ResponseInterface; class CookieJar implements CookieJarInterface { private $cookies = array(); private $strictMode; public function __construct($strictMode = false, $cookieArray = array()) { goto pgFpy; Cnfus: foreach ($cookieArray as $cookie) { goto kbhcA; sRuKo: $cookie = new SetCookie($cookie); goto l7JRJ; wHFfU: ltjnX: goto UuvVV; g3uGr: $this->setCookie($cookie); goto wHFfU; kbhcA: if ($cookie instanceof SetCookie) { goto touOH; } goto sRuKo; l7JRJ: touOH: goto g3uGr; UuvVV: } goto UAFX4; pgFpy: $this->strictMode = $strictMode; goto Cnfus; UAFX4: DkGTV: goto SOJla; SOJla: } public static function fromArray(array $cookies, $domain) { goto GcML6; feZ5v: zYozD: goto FSW9P; FSW9P: return $cookieJar; goto msS_h; zFhmr: foreach ($cookies as $name => $value) { $cookieJar->setCookie(new SetCookie(["\104\157\x6d\x61\x69\156" => $domain, "\x4e\141\155\x65" => $name, "\126\141\x6c\165\145" => $value, "\x44\x69\x73\143\141\162\x64" => true])); Zambn: } goto feZ5v; GcML6: $cookieJar = new self(); goto zFhmr; msS_h: } public static function getCookieValue($value) { return $value; } public static function shouldPersist(SetCookie $cookie, $allowSessionCookies = false) { goto P2XUg; YMZsc: jejzF: goto jcOg7; oeLEy: return false; goto yBf0O; P2XUg: if (!($cookie->getExpires() || $allowSessionCookies)) { goto QM21l; } goto N30P6; N30P6: if ($cookie->getDiscard()) { goto jejzF; } goto X0_6z; jcOg7: QM21l: goto oeLEy; X0_6z: return true; goto YMZsc; yBf0O: } public function getCookieByName($name) { goto TyO76; r53nz: ZCnQY: goto o_zV8; lQv3u: JyX5R: goto PuDId; PuDId: foreach ($this->cookies as $cookie) { goto tqE67; tqE67: if (!($cookie->getName() !== null && strcasecmp($cookie->getName(), $name) === 0)) { goto DYimh; } goto cA7Ov; cA7Ov: return $cookie; goto kc1ac; H3DQ5: HFHUe: goto Yc2EN; kc1ac: DYimh: goto H3DQ5; Yc2EN: } goto r53nz; TyO76: if (!($name === null)) { goto JyX5R; } goto ug87h; ug87h: return null; goto lQv3u; o_zV8: } public function toArray() { return array_map(function (SetCookie $cookie) { return $cookie->toArray(); }, $this->getIterator()->getArrayCopy()); } public function clear($domain = null, $path = null, $name = null) { goto zR4Zk; F7gVz: $this->cookies = []; goto gK9DU; a1elF: if (!$name) { goto KZZBT; } goto iEoc_; Q3aia: goto e9M3U; goto k1bGZ; iEoc_: $this->cookies = array_filter($this->cookies, function (SetCookie $cookie) use($path, $domain, $name) { return !($cookie->getName() == $name && $cookie->matchesPath($path) && $cookie->matchesDomain($domain)); }); goto Q3aia; hVRHw: goto e9M3U; goto w2Pss; gK9DU: return; goto WnErl; aE_il: YjSwK: goto U5Rr4; k1bGZ: RS3SQ: goto F7gVz; Y6kGz: e9M3U: goto LZAme; w2Pss: KZZBT: goto IPm9O; IPm9O: $this->cookies = array_filter($this->cookies, function (SetCookie $cookie) use($path, $domain) { return !($cookie->matchesPath($path) && $cookie->matchesDomain($domain)); }); goto Y6kGz; zR4Zk: if (!$domain) { goto RS3SQ; } goto ErMxc; ErMxc: if (!$path) { goto YjSwK; } goto a1elF; WnErl: goto e9M3U; goto aE_il; U5Rr4: $this->cookies = array_filter($this->cookies, function (SetCookie $cookie) use($path, $domain) { return !$cookie->matchesDomain($domain); }); goto hVRHw; LZAme: } public function clearSessionCookies() { $this->cookies = array_filter($this->cookies, function (SetCookie $cookie) { return !$cookie->getDiscard() && $cookie->getExpires(); }); } public function setCookie(SetCookie $cookie) { goto XRVCr; Baevp: j60dk: goto IZRnT; rFUG0: throw new \RuntimeException("\111\x6e\166\141\154\151\144\x20\x63\157\x6f\x6b\x69\x65\x3a\40" . $result); goto Baevp; d0J4d: $result = $cookie->validate(); goto SS04N; uyfIC: $this->removeCookieIfEmpty($cookie); goto nYf6r; l1MEq: yrb97: goto sPB9L; UcTAd: return false; goto Owdtv; fRA5J: foreach ($this->cookies as $i => $c) { goto fQuEt; SLZOg: if (!(!$cookie->getDiscard() && $c->getDiscard())) { goto MBB6d; } goto FchBC; fQuEt: if (!($c->getPath() != $cookie->getPath() || $c->getDomain() != $cookie->getDomain() || $c->getName() != $cookie->getName())) { goto TMxfr; } goto SVkbD; iy76p: hV1ro: goto Bu8NA; UqeLE: if (!($cookie->getValue() !== $c->getValue())) { goto cqWqS; } goto K8hqr; sjdez: MBB6d: goto JJaIr; ilpMz: goto hV1ro; goto J5OpH; c83SF: goto hV1ro; goto OkvxB; o6qQA: unset($this->cookies[$i]); goto c83SF; OkvxB: P0uE2: goto UqeLE; JJaIr: if (!($cookie->getExpires() > $c->getExpires())) { goto P0uE2; } goto o6qQA; VZD78: TMxfr: goto SLZOg; ItnGZ: goto hV1ro; goto sjdez; rl207: return false; goto iy76p; FchBC: unset($this->cookies[$i]); goto ItnGZ; SVkbD: goto hV1ro; goto VZD78; K8hqr: unset($this->cookies[$i]); goto ilpMz; J5OpH: cqWqS: goto rl207; Bu8NA: } goto l1MEq; aww7C: return true; goto iZtQa; VXVWg: if ($this->strictMode) { goto jUyt3; } goto uyfIC; sLiVD: if (!(!$name && $name !== "\60")) { goto jfrqZ; } goto UcTAd; Owdtv: jfrqZ: goto d0J4d; tPCJV: jUyt3: goto rFUG0; sPB9L: $this->cookies[] = $cookie; goto aww7C; SS04N: if (!($result !== true)) { goto P5IOm; } goto VXVWg; XRVCr: $name = $cookie->getName(); goto sLiVD; nYf6r: return false; goto IYiN2; IZRnT: P5IOm: goto fRA5J; IYiN2: goto j60dk; goto tPCJV; iZtQa: } public function count() { return count($this->cookies); } public function getIterator() { return new \ArrayIterator(array_values($this->cookies)); } public function extractCookies(RequestInterface $request, ResponseInterface $response) { goto pTRx_; vmVaY: JTNrp: goto Bce4N; tK3Pq: foreach ($cookieHeader as $cookie) { goto S0BiS; smdWp: FvsGx: goto qEJSv; qEJSv: if (!(0 !== strpos($sc->getPath(), "\57"))) { goto vLNFY; } goto QRSN0; tqnIL: vLNFY: goto eGKEx; S0BiS: $sc = SetCookie::fromString($cookie); goto ayyYg; ayyYg: if ($sc->getDomain()) { goto FvsGx; } goto emA2o; eGKEx: $this->setCookie($sc); goto pbMrl; emA2o: $sc->setDomain($request->getUri()->getHost()); goto smdWp; pbMrl: Bqs1t: goto SLCY7; QRSN0: $sc->setPath($this->getCookiePathFromRequest($request)); goto tqnIL; SLCY7: } goto diN5e; pTRx_: if (!($cookieHeader = $response->getHeader("\x53\x65\164\55\103\157\x6f\153\151\x65"))) { goto JTNrp; } goto tK3Pq; diN5e: LSprE: goto vmVaY; Bce4N: } private function getCookiePathFromRequest(RequestInterface $request) { goto SY1sS; ra1qt: W9sZz: goto rWdtD; SCYTM: return "\57"; goto ra1qt; d6vRA: if (!(0 === ($lastSlashPos = strrpos($uriPath, "\57")))) { goto eoVC7; } goto zOBwz; jNYTc: if (!('' === $uriPath)) { goto W9sZz; } goto SCYTM; WM2mQ: return substr($uriPath, 0, $lastSlashPos); goto IQ9ab; rWdtD: if (!(0 !== strpos($uriPath, "\x2f"))) { goto A12E5; } goto AEyYX; Rmwfn: if (!("\57" === $uriPath)) { goto Jnl8r; } goto brkAj; SY1sS: $uriPath = $request->getUri()->getPath(); goto jNYTc; ZOfIM: Jnl8r: goto d6vRA; zOBwz: return "\x2f"; goto JqsxH; JqsxH: eoVC7: goto WM2mQ; brkAj: return "\57"; goto ZOfIM; AEyYX: return "\x2f"; goto kS6dk; kS6dk: A12E5: goto Rmwfn; IQ9ab: } public function withCookieHeader(RequestInterface $request) { goto a2Vco; mMbTo: gSYRi: goto gHRmm; p1fdc: $uri = $request->getUri(); goto I3dDZ; gHRmm: return $values ? $request->withHeader("\103\157\x6f\x6b\151\x65", implode("\73\40", $values)) : $request; goto e7fPE; H0C0w: $host = $uri->getHost(); goto st1IV; st1IV: $path = $uri->getPath() ?: "\x2f"; goto tUU5p; tUU5p: foreach ($this->cookies as $cookie) { goto KQKK7; lyI6O: i9iKQ: goto RcEpX; YVGXp: $values[] = $cookie->getName() . "\75" . $cookie->getValue(); goto lyI6O; KQKK7: if (!($cookie->matchesPath($path) && $cookie->matchesDomain($host) && !$cookie->isExpired() && (!$cookie->getSecure() || $scheme === "\x68\x74\164\x70\x73"))) { goto i9iKQ; } goto YVGXp; RcEpX: wr6Z9: goto fTMUC; fTMUC: } goto mMbTo; a2Vco: $values = []; goto p1fdc; I3dDZ: $scheme = $uri->getScheme(); goto H0C0w; e7fPE: } private function removeCookieIfEmpty(SetCookie $cookie) { goto bV9zK; Vqy7y: Df7b4: goto ZetgN; yUUsQ: $this->clear($cookie->getDomain(), $cookie->getPath(), $cookie->getName()); goto Vqy7y; bV9zK: $cookieValue = $cookie->getValue(); goto o2xl2; o2xl2: if (!($cookieValue === null || $cookieValue === '')) { goto Df7b4; } goto yUUsQ; ZetgN: } }