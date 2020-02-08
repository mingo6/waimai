<?php
 namespace GuzzleHttp; use Psr\Http\Message\RequestInterface; use Psr\Http\Message\ResponseInterface; use Psr\Http\Message\UriInterface; final class TransferStats { private $request; private $response; private $transferTime; private $handlerStats; private $handlerErrorData; public function __construct(RequestInterface $request, ResponseInterface $response = null, $transferTime = null, $handlerErrorData = null, $handlerStats = array()) { goto VFuQx; VFuQx: $this->request = $request; goto w19hf; fDp5C: $this->handlerErrorData = $handlerErrorData; goto BdnQe; w19hf: $this->response = $response; goto yE10Q; BdnQe: $this->handlerStats = $handlerStats; goto OTOma; yE10Q: $this->transferTime = $transferTime; goto fDp5C; OTOma: } public function getRequest() { return $this->request; } public function getResponse() { return $this->response; } public function hasResponse() { return $this->response !== null; } public function getHandlerErrorData() { return $this->handlerErrorData; } public function getEffectiveUri() { return $this->request->getUri(); } public function getTransferTime() { return $this->transferTime; } public function getHandlerStats() { return $this->handlerStats; } public function getHandlerStat($stat) { return isset($this->handlerStats[$stat]) ? $this->handlerStats[$stat] : null; } }