import './index.css'
import { getArticles } from '../../api/article'
import { getDrinks, getOrders } from "../../api"
import { useEffect, useRef, useState } from "react"
import { getAllUser } from '../../api/user';
import { takeAction } from '../../api/admin';

function AdminPage() {
	const [drinks, setDrinks] = useState([]);
	const [news, setNews] = useState([]);
	const [orders, setOrders] = useState([]);
	const [ren, setRen] = useState(true);

	const tableRef = useRef();
	const tableRef2 = useRef();

	const [select, setSelect] = useState("drinks");
	const [display, setDisplay] = useState([]);
	const [isSelect, setIsSelect] = useState(false);

	const colList = {
		drinks: [
			'drink_id',
			'name',
			'price',
			'description',
			'type',
			'image',
		],
		news: [
			'article_id',
			'ad_id',
			'content',
			'date',
			'title',
			'image',
		],
		customers: [
			'user_id',
			'username',
			'password',
			'name',
			'address',
			'role'
		],
		admins: [
			'user_id',
			'username',
			'password',
			'name',
			'address',
			'role'
		]
	}

	const tabSqlNameList = {
		drinks: 'drink',
		news: 'article',
		customers: 'user',
		admins: 'user'
	}

	const handleAdSelect = (key) => {
		switch (key)
		{
			case "drinks":
				Promise.resolve(getDrinks()).then(data => {
					setDisplay(data);
				});
				break;
			case "news":
				Promise.resolve(getArticles()).then(data => {
					setDisplay(data);
				});
				break;
			case "customers":
				Promise.resolve(getAllUser("cus")).then(data => {
					setDisplay(data);
				});
				break;
			case "admins":
				Promise.resolve(getAllUser("ad")).then(data => {
					setDisplay(data);
				});
				break;
			default:
				break;
		}
		setSelect(key);
		setIsSelect(true);
	}

	const AdminSelection = () => {
		const res = []
		for (const key in colList)
		{
			res.push(<button className='btn btn-success border-0 m-1' onClick={() => handleAdSelect(key)}>
				{key}
			</button>);
		}
		return res;
	}

	const handleEdit = (id, rowId) => {
		const row = tableRef.current.rows[rowId];
		//console.log(tableRef.current.rows[rowId]);

		const cols = colList[select];
		const data = [];
		let cmd = "";

		for (let i = 0; i < cols.length; i++)
		{
			// data[cols[i]] = row.cells[i].innerText;
			data[i] = row.cells[i].innerText;
		}

		console.log(data);

		if (select === 'drinks')
		{
			cmd = `update drink 
			set
			name='${data[1]}',
			price=${data[2]},
			description='${data[3]}',
			type='${data[4]}',
			image='${data[5]}' where drink_id=${id}`;
			//console.log(cmd);
		}
		else if (select === "news")
		{
			cmd = `update article 
			set
			ad_id=${data[1]},
			content='${data[2]}',
			date='${data[3]}',
			title='${data[4]}',
			image='${data[5]}' where article_id=${id}`;
		}
		else if (select === "customers" || select === "admins")
		{
			cmd = `update user 
			set
			username='${data[1]}',
			password='${data[2]}',
			name='${data[3]}',
			address='${data[4]}',
			role='${data[5]}' where user_id=${id}`;
		}
		// else if ()
		// {
		// }

		alert("Sửa thành công!");
		takeAction(cmd).then(() => {
			window.location.reload();
		});
	}
	const handleDelete = (id) => {
		const cmd = `delete from ${tabSqlNameList[select]} where ${colList[select][0]}=${id}`;
		console.log(cmd)
		alert("Xoá thành công!");
		takeAction(cmd).then(() => {
			window.location.reload();
		});
	}

	const handleAdd = () => {
		const row = tableRef2.current.rows[1];
		//console.log(tableRef.current.rows[rowId]);

		const cols = colList[select];
		const data = [];
		let cmd = "";

		for (let i = 0; i < cols.length - 1; i++)
		{
			data[i] = row.cells[i].innerText;
		}

		console.log(data);

		if (select === 'drinks')
		{
			cmd = `insert into drink 
			(name, price, description, type, image)
			values
			('${data[1]}',${data[2]},'${data[3]}','${data[4]}','${data[5]}')`;
		}
		else if (select === "news")
		{
			cmd = `insert into article 
			(ad_id, content, date, title, image)
			values 
			(${data[1]},'${data[2]}','${data[3]}','${data[4]}','${data[5]}')`;
		}
		else if (select === "customers")
		{
			cmd = `insert into user 
			(username, password, name, address, role)
			values
			('${data[1]}','${data[2]}','${data[3]}','${data[4]}','cus')`;

			console.log(cmd)

		}
		else if (select === "admins")
		{
			cmd = `insert into user 
			(username, password, name, address, role)
			values
			('${data[1]}','${data[2]}','${data[3]}','${data[4]}','ad')`;

			console.log(cmd)
		}

		alert("Thêm thành công!");
		takeAction(cmd).then(() => {
			window.location.reload();
		});
	}

	const RenderAdd = () => {
		return (
			<>
				<h5>Thêm dữ liệu mới:</h5>
				<button className='btn btn-success border-0 m-1' onClick={handleAdd}>
					Thêm dữ liệu
				</button>
				<table className="table table-bordered" ref={tableRef2}>
					<thead className="thead-dark">
						<tr>
							{colList[select].map((item, idx) => {
								return (<th key={idx} scope="row">{colList[select][idx]}</th>);
							})}
						</tr>
					</thead>
					<tbody>
						<tr>
							{colList[select].map((item, idx) => {
								return (<td key={idx} contentEditable></td>);
							})}
						</tr>
					</tbody>
				</table>
			</>
		)
	}


	return (
		<div id="admin-page" className='container'>
			<h5>Chọn đối tượng muốn sửa</h5>
			<div className='ad-select'>
				<AdminSelection />
			</div>

			<table className="table table-bordered" ref={tableRef}>
				<thead className="thead-dark">
					<tr>
						{colList[select].map((item, idx) => {
							return (<th key={idx} scope="row">{colList[select][idx]}</th>);
						})}
						<th scope="row">actions</th>
					</tr>
				</thead>
				<tbody>
					{display.map((item, idx) => (
						<tr key={idx}>
							{colList[select].map((itm, j) => {
								if (j === colList[select].length - 1)
								{
									return (
										<td contentEditable
											suppressContentEditableWarning
											className='table-data'
											style={{ wordBreak: 'break-all' }}>
											{item[itm]}
										</td>)
								}
								return (<td contentEditable
									suppressContentEditableWarning
									className='table-data'>
									{item[itm]}
								</td>)
							})}
							<td className='d-flex flex-column'>
								<button className='btn btn-primary border-0 m-1'
									onClick={() => handleEdit(item[colList[select][0]], idx + 1)}>
									Save
								</button>
								<button className='btn btn-danger border-0 m-1'
									onClick={() => handleDelete(item[colList[select][0]])}>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			<br /><br />

			{isSelect ? <RenderAdd /> : ""}

		</div>
	)
}

export default AdminPage;