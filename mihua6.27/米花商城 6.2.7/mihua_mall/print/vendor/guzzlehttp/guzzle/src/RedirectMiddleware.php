<?php
 namespace GuzzleHttp; use GuzzleHttp\Exception\BadResponseException; use GuzzleHttp\Exception\TooManyRedirectsException; use GuzzleHttp\Promise\PromiseInterface; use GuzzleHttp\Psr7; use Psr\Http\Message\RequestInterface; use Psr\Http\Message\ResponseInterface; use Psr\Http\Message\UriInterface; class RedirectMiddleware { const HISTORY_HEADER = "\130\55\107\x75\x7a\172\154\x65\55\x52\145\144\151\162\145\x63\x74\x2d\110\x69\x73\x74\157\162\x79"; const STATUS_HISTORY_HEADER = "\130\x2d\x47\165\x7a\172\154\x65\55\122\x65\144\151\x72\145\143\x74\x2d\x53\x74\141\x74\165\163\55\110\x69\163\x74\157\x72\171"; public static $defaultSettings = array("\x6d\x61\x78" => 5, "\x70\162\157\164\157\x63\x6f\154\163" => array("\150\164\164\160", "\150\x74\164\x70\163"), "\163\x74\162\x69\x63\x74" => false, "\162\145\x66\145\162\145\x72" => false, "\164\162\x61\x63\153\x5f\162\145\x64\x69\x72\x65\143\164\x73" => false); private $nextHandler; public function __construct(callable $nextHandler) { $this->nextHandler = $nextHandler; } public function __invoke(RequestInterface $request, array $options) { goto AK5pN; DgykW: if (!empty($options["\141\x6c\154\x6f\x77\137\162\x65\144\151\162\145\143\164\x73"]["\155\x61\170"])) { goto XzbbN; } goto uLamT; hTIcS: goto cmQyz; goto ULgLc; uIKsB: cmQyz: goto DgykW; ULgLc: syXEm: goto ulhpu; qwhBr: goto cmQyz; goto JcTcU; X2keD: return $fn($request, $options); goto Ju6So; hhlIX: if (!empty($options["\x61\x6c\154\x6f\x77\x5f\162\x65\144\x69\162\145\x63\164\x73"])) { goto JBLVC; } goto X2keD; Y16N3: if ($options["\x61\154\x6c\157\x77\x5f\162\x65\144\151\162\145\143\164\163"] === true) { goto CUMuL; } goto NY1Uj; Lti7b: return $fn($request, $options)->then(function (ResponseInterface $response) use($request, $options) { return $this->checkRedirect($request, $options, $response); }); goto TxxwX; uLamT: return $fn($request, $options); goto qSDyK; qSDyK: XzbbN: goto Lti7b; cTbb7: $options["\141\154\154\x6f\x77\x5f\x72\x65\x64\151\162\x65\x63\164\x73"] = self::$defaultSettings; goto hTIcS; NY1Uj: if (!is_array($options["\x61\154\154\x6f\167\137\x72\x65\x64\x69\162\x65\x63\164\x73"])) { goto syXEm; } goto ACvhH; AK5pN: $fn = $this->nextHandler; goto hhlIX; ulhpu: throw new \InvalidArgumentException("\x61\154\x6c\x6f\x77\x5f\x72\145\144\151\162\x65\143\164\163\x20\x6d\x75\x73\164\40\142\145\40\x74\162\165\x65\54\x20\x66\141\x6c\163\x65\54\x20\x6f\162\x20\141\x72\x72\x61\x79"); goto uIKsB; JcTcU: CUMuL: goto cTbb7; ACvhH: $options["\141\x6c\x6c\157\x77\137\x72\145\x64\151\x72\x65\143\x74\163"] += self::$defaultSettings; goto qwhBr; Ju6So: JBLVC: goto Y16N3; TxxwX: } public function checkRedirect(RequestInterface $request, array $options, ResponseInterface $response) { goto HRkv7; yBCRf: call_user_func($options["\x61\154\154\157\x77\x5f\162\145\x64\x69\162\x65\143\164\x73"]["\157\x6e\137\162\145\144\151\x72\x65\143\164"], $request, $response, $nextRequest->getUri()); goto GFn3w; fur9x: $nextRequest = $this->modifyRequest($request, $options, $response); goto L2or3; HjV9Y: WDvp2: goto Tz2jJ; VCY0B: if (empty($options["\x61\x6c\154\x6f\167\137\162\145\144\151\162\145\143\164\163"]["\x74\162\141\143\x6b\137\162\145\x64\x69\162\145\x63\164\x73"])) { goto UzjAM; } goto hE3Nw; iJBel: $promise = $this($nextRequest, $options); goto VCY0B; GFn3w: KSFUE: goto iJBel; hZRMu: return $response; goto HjV9Y; HRkv7: if (!(substr($response->getStatusCode(), 0, 1) != "\x33" || !$response->hasHeader("\x4c\x6f\x63\141\x74\x69\157\156"))) { goto WDvp2; } goto hZRMu; v532e: UzjAM: goto JQN9M; JQN9M: return $promise; goto AJFjJ; L2or3: if (!isset($options["\141\x6c\154\x6f\167\x5f\162\x65\144\x69\x72\x65\143\x74\163"]["\157\x6e\137\x72\145\x64\151\x72\145\x63\164"])) { goto KSFUE; } goto yBCRf; hE3Nw: return $this->withTracking($promise, (string) $nextRequest->getUri(), $response->getStatusCode()); goto v532e; Tz2jJ: $this->guardMax($request, $options); goto fur9x; AJFjJ: } private function withTracking(PromiseInterface $promise, $uri, $statusCode) { return $promise->then(function (ResponseInterface $response) use($uri, $statusCode) { $historyHeader = $response->getHeader(self::HISTORY_HEADER); $statusHeader = $response->getHeader(self::STATUS_HISTORY_HEADER); array_unshift($historyHeader, $uri); array_unshift($statusHeader, $statusCode); return $response->withHeader(self::HISTORY_HEADER, $historyHeader)->withHeader(self::STATUS_HISTORY_HEADER, $statusHeader); }); } private function guardMax(RequestInterface $request, array &$options) { goto C2URS; fj5T7: $options["\137\137\162\145\144\x69\162\145\143\x74\137\x63\157\165\x6e\164"] = $current + 1; goto fEj6N; taIiS: if (!($options["\x5f\x5f\162\145\x64\x69\162\145\x63\x74\x5f\143\157\x75\x6e\x74"] > $max)) { goto c9sXB; } goto l70Bt; fEj6N: $max = $options["\141\x6c\154\157\167\137\x72\145\144\151\x72\145\x63\164\x73"]["\155\141\x78"]; goto taIiS; C2URS: $current = isset($options["\137\x5f\x72\145\144\151\162\145\143\x74\x5f\143\x6f\165\156\164"]) ? $options["\x5f\137\x72\x65\144\151\x72\145\143\164\137\x63\157\x75\x6e\x74"] : 0; goto fj5T7; l70Bt: throw new TooManyRedirectsException("\x57\x69\x6c\x6c\40\156\x6f\164\40\146\157\154\154\157\167\40\155\x6f\x72\145\x20\164\x68\141\x6e\40{$max}\x20\x72\145\144\x69\x72\x65\x63\164\163", $request); goto JMQeP; JMQeP: c9sXB: goto kHJOU; kHJOU: } public function modifyRequest(RequestInterface $request, array $options, ResponseInterface $response) { goto sWzUp; XPpNP: $protocols = $options["\141\x6c\154\157\167\x5f\x72\x65\144\x69\162\145\x63\x74\163"]["\x70\162\x6f\x74\x6f\143\157\x6c\163"]; goto fazVl; F_gb5: $modify["\x72\x65\155\157\166\x65\x5f\x68\145\141\144\145\162\x73"][] = "\122\x65\x66\145\162\145\162"; goto tLHnI; pvH0U: yvUzW: goto HCfb1; QMuLR: SFXOy: goto h5fq3; tLHnI: goto yvUzW; goto K3sw1; epbLA: E2mEn: goto bzIza; gXr2c: $modify["\163\145\164\137\150\x65\141\144\145\162\x73"]["\122\145\x66\x65\x72\145\x72"] = (string) $uri; goto pvH0U; WpX2p: $modify["\x72\145\155\157\166\x65\x5f\x68\x65\x61\144\145\x72\x73"][] = "\101\x75\x74\150\x6f\162\151\172\x61\164\151\x6f\x6e"; goto epbLA; eYiAX: if ($options["\x61\x6c\x6c\x6f\167\x5f\162\x65\144\x69\162\x65\143\164\x73"]["\162\x65\x66\x65\162\145\162"] && $modify["\165\x72\x69"]->getScheme() === $request->getUri()->getScheme()) { goto q6aUF; } goto F_gb5; h5fq3: $modify["\165\162\151"] = $this->redirectUri($request, $response, $protocols); goto BoQxn; Ou82q: $modify["\155\145\x74\x68\x6f\x64"] = "\x47\x45\x54"; goto Qguq9; bzIza: return Psr7\modify_request($request, $modify); goto oPCeH; BoQxn: Psr7\rewind_body($request); goto eYiAX; Qguq9: $modify["\x62\x6f\144\x79"] = ''; goto QMuLR; sWzUp: $modify = []; goto XPpNP; K3sw1: q6aUF: goto VYHbK; VYHbK: $uri = $request->getUri()->withUserInfo('', ''); goto gXr2c; fazVl: $statusCode = $response->getStatusCode(); goto nHVSm; HCfb1: if (!($request->getUri()->getHost() !== $modify["\165\x72\x69"]->getHost())) { goto E2mEn; } goto WpX2p; nHVSm: if (!($statusCode == 303 || $statusCode <= 302 && $request->getBody() && !$options["\141\154\154\x6f\167\x5f\x72\x65\144\151\162\145\x63\164\x73"]["\x73\164\x72\x69\x63\164"])) { goto SFXOy; } goto Ou82q; oPCeH: } private function redirectUri(RequestInterface $request, ResponseInterface $response, array $protocols) { goto ougw0; s8jSE: if (in_array($location->getScheme(), $protocols)) { goto xE4g_; } goto CIgt5; YtRC_: return $location; goto v7bU_; ougw0: $location = Psr7\UriResolver::resolve($request->getUri(), new Psr7\Uri($response->getHeaderLine("\114\x6f\143\x61\x74\x69\157\x6e"))); goto s8jSE; A7XJ9: xE4g_: goto YtRC_; CIgt5: throw new BadResponseException(sprintf("\122\x65\x64\x69\x72\x65\x63\164\x20\125\x52\x49\54\x20\45\x73\54\x20\x64\x6f\x65\163\40\x6e\157\164\x20\x75\163\145\40\x6f\x6e\x65\40\x6f\146\x20\164\x68\145\x20\141\154\154\x6f\167\x65\144\x20\162\145\144\x69\162\145\143\164\40\160\162\157\164\x6f\x63\x6f\154\x73\72\x20\45\x73", $location, implode("\54\40", $protocols)), $request, $response); goto A7XJ9; v7bU_: } }