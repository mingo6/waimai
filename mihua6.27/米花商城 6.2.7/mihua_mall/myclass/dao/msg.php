<?php
 namespace myclass\dao; class msg extends common { public $msg_id = "\x6d\163\147\137\x69\144"; public $msg_title = "\x6d\x73\x67\137\164\x69\164\x6c\145"; public $msg_content = "\155\x73\x67\137\x63\x6f\x6e\164\x65\156\164"; public $status = "\x73\164\x61\x74\x75\163"; public function __construct() { $this->setTable("\155\x69\150\x75\x61\137\x6d\141\154\154\x5f\155\163\x67"); $this->setGlobal(); } public function dataAdd($arr) { return parent::add($arr); } public function dataEdit($id, $up = false) { goto U43iF; GwO1K: return $result; goto dMzeB; U43iF: $where[$this->msg_id] = $id; goto I9iLL; I9iLL: $result = parent::edit($where, $up); goto GwO1K; dMzeB: } }