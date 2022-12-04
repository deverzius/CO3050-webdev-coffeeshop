<?php
require_once __DIR__ . '/../database/database.php';
header('Content-type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

class Admin
{
	public $database;

	public function __construct()
	{
		$this->database = new Database();
	}

	function perform_action($command)
	{
		$conn = $this->database->connect();
		$conn->query($command);
		$conn->close();
	}
}

$ad = new Admin();
$command = $_POST['command'];

echo json_encode($ad->perform_action($command));
