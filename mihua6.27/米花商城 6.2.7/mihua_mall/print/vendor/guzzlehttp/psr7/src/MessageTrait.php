<?php
 namespace GuzzleHttp\Psr7; use Psr\Http\Message\StreamInterface; trait MessageTrait { private $headers = array(); private $headerNames = array(); private $protocol = "\61\x2e\61"; private $stream; public function getProtocolVersion() { return $this->protocol; } public function withProtocolVersion($version) { goto dkLzn; BF2jQ: $new->protocol = $version; goto Ccb9M; mdezN: iwNXU: goto sNGse; sNGse: $new = clone $this; goto BF2jQ; koOL8: return $this; goto mdezN; dkLzn: if (!($this->protocol === $version)) { goto iwNXU; } goto koOL8; Ccb9M: return $new; goto lYilf; lYilf: } public function getHeaders() { return $this->headers; } public function hasHeader($header) { return isset($this->headerNames[strtolower($header)]); } public function getHeader($header) { goto HAUo6; S58WB: $header = $this->headerNames[$header]; goto t9fa1; Ryrca: if (isset($this->headerNames[$header])) { goto dkaV0; } goto qLtk4; SRsPp: dkaV0: goto S58WB; qLtk4: return []; goto SRsPp; t9fa1: return $this->headers[$header]; goto nKtdK; HAUo6: $header = strtolower($header); goto Ryrca; nKtdK: } public function getHeaderLine($header) { return implode("\x2c\x20", $this->getHeader($header)); } public function withHeader($header, $value) { goto rNuXH; FbkTt: $value = $this->trimHeaderValues($value); goto aCUlN; inWtf: $new->headers[$header] = $value; goto sk9By; S3G8i: F7KUw: goto p8G5H; ysLWA: if (!isset($new->headerNames[$normalized])) { goto F7KUw; } goto i3uDK; aCUlN: $normalized = strtolower($header); goto Y1bTB; uMfQT: $value = [$value]; goto FtaRU; rNuXH: if (is_array($value)) { goto GuEvl; } goto uMfQT; i3uDK: unset($new->headers[$new->headerNames[$normalized]]); goto S3G8i; sk9By: return $new; goto kzs_6; Y1bTB: $new = clone $this; goto ysLWA; p8G5H: $new->headerNames[$normalized] = $header; goto inWtf; FtaRU: GuEvl: goto FbkTt; kzs_6: } public function withAddedHeader($header, $value) { goto KbfFn; Ad4Sf: cJ7N9: goto fw06N; v7vV7: $normalized = strtolower($header); goto cNdht; vXQ9f: $value = $this->trimHeaderValues($value); goto v7vV7; KbfFn: if (is_array($value)) { goto J89Mk; } goto hPMJI; hPMJI: $value = [$value]; goto Rdr48; MLTYG: goto FNFr1; goto Ad4Sf; Rdr48: J89Mk: goto vXQ9f; npI33: if (isset($new->headerNames[$normalized])) { goto cJ7N9; } goto On0Fs; On0Fs: $new->headerNames[$normalized] = $header; goto qfqx1; kqVJP: $new->headers[$header] = array_merge($this->headers[$header], $value); goto He3OM; cNdht: $new = clone $this; goto npI33; eCIyB: return $new; goto UI2_i; He3OM: FNFr1: goto eCIyB; qfqx1: $new->headers[$header] = $value; goto MLTYG; fw06N: $header = $this->headerNames[$normalized]; goto kqVJP; UI2_i: } public function withoutHeader($header) { goto gpNBb; Yn8dc: unset($new->headers[$header], $new->headerNames[$normalized]); goto aFl31; o1ngj: hczl6: goto DoU0Y; hSpHh: return $this; goto o1ngj; gb_pe: if (isset($this->headerNames[$normalized])) { goto hczl6; } goto hSpHh; aFl31: return $new; goto GxWFO; gpNBb: $normalized = strtolower($header); goto gb_pe; DoU0Y: $header = $this->headerNames[$normalized]; goto a5rUY; a5rUY: $new = clone $this; goto Yn8dc; GxWFO: } public function getBody() { goto DzqYp; MQbJs: $this->stream = stream_for(''); goto uOAab; DzqYp: if ($this->stream) { goto fBP87; } goto MQbJs; uOAab: fBP87: goto SfX0V; SfX0V: return $this->stream; goto J3FGc; J3FGc: } public function withBody(StreamInterface $body) { goto pVXaK; mAUpw: $new = clone $this; goto myIg8; Qiq9r: return $new; goto LxAJK; myIg8: $new->stream = $body; goto Qiq9r; g3zGm: return $this; goto in2Gw; in2Gw: LhIz3: goto mAUpw; pVXaK: if (!($body === $this->stream)) { goto LhIz3; } goto g3zGm; LxAJK: } private function setHeaders(array $headers) { goto FYhIz; FYhIz: $this->headerNames = $this->headers = []; goto RVLh2; RVLh2: foreach ($headers as $header => $value) { goto v5wUb; Oo3bw: $normalized = strtolower($header); goto mX3Sc; jpMD2: dBVwS: goto T681z; L2N_8: $header = $this->headerNames[$normalized]; goto dFr_P; mX3Sc: if (isset($this->headerNames[$normalized])) { goto EL9WB; } goto paFyG; KIOeT: $value = $this->trimHeaderValues($value); goto Oo3bw; ijVDk: $this->headers[$header] = $value; goto F1xG4; v5wUb: if (is_array($value)) { goto pbXFo; } goto urbzZ; urbzZ: $value = [$value]; goto WnFAf; HMDEL: EL9WB: goto L2N_8; paFyG: $this->headerNames[$normalized] = $header; goto ijVDk; dFr_P: $this->headers[$header] = array_merge($this->headers[$header], $value); goto jpMD2; WnFAf: pbXFo: goto KIOeT; F1xG4: goto dBVwS; goto HMDEL; T681z: bjzJ2: goto Coocj; Coocj: } goto hpJJa; hpJJa: JC1_A: goto GcA06; GcA06: } private function trimHeaderValues(array $values) { return array_map(function ($value) { return trim($value, "\40\x9"); }, $values); } }