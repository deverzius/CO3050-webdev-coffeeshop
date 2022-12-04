<?php
class Database
{
	private $servername = 'localhost';
	private $username = 'root';
	private $password = '';
	private $dbname = 'bk_coffee';
	public function __construct()
	{
	}

	public function connect()
	{
		$conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname);

		return $conn;
	}
}
