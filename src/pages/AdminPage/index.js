

function AdminPage() {
	return (
		<div id="admin-page" class="container">
			<table class="table table-bordered">
				<thead class="thead-dark">
					<th scope="row">ID</th>
					<th scope="row">Name</th>
					<th scope="row">Description</th>
					<th scope="row">Price</th>
					<th scope="row">Action</th>
				</thead>
				<tbody>
					{/* <?php
				$servername = "localhost";
				$username = "root";
				$password = "";
				$dbname = "shop";

				$conn = new mysqli($servername, $username, $password, $dbname);

				$sql = "SELECT id, name, description, price, image FROM products";
				$result = $conn->query($sql);

				while ($row = mysqli_fetch_assoc($result)) {
					$link = $_SERVER['REQUEST_URI'];
					$link = str_replace("a.php", "d.php", $link);
					$link = $link . "?id={$row['id']}";

					$link_alter = $_SERVER['REQUEST_URI'];
					$link_alter = str_replace("a.php", "c.php", $link_alter);
					$link_alter = $link_alter . "?id={$row['id']}";

					echo "<tr>";
					echo "<td>{$row['id']}</td>";
					echo "<td>{$row['name']}</td>";
					echo "<td>{$row['description']}</td>";
					echo "<td>{$row['price']}</td>";
					echo "<td class='d-flex'>";
					echo "<a class='btn btn-success border-0 m-1'>Read</a>";
					echo "<a class='btn btn-primary border-0 m-1' href='{$link_alter}'>Edit</a>";
					echo "<a class='btn btn-danger border-0 m-1' href='{$link}'>Delete</a>";
					echo "</td>";
					echo "</tr>";
				} */}

				</tbody>
			</table>
		</div >
	)
}

export default AdminPage;