import * as SQLite from 'expo-sqlite';

export class IdsDatabase {
	private static instance: IdsDatabase;
	private db: SQLite.SQLiteDatabase;

	private constructor() {
		this.db = SQLite.openDatabase('pokemon.db');
	}

	static getInstance(): IdsDatabase {
		if (!IdsDatabase.instance) {
			IdsDatabase.instance = new IdsDatabase();
		}
		return IdsDatabase.instance;
	}

	private errorCallback(tx: SQLite.SQLTransaction, error: SQLite.SQLError): boolean {
		// Manejar el error aquí
		console.error('An error occurred:', error.message);
		// Devolver true para continuar la transacción o false para deshacerla
		return false;
	}

	insertData(data: number[]): Promise<SQLite.SQLResultSet> {
		let query = 'INSERT INTO favoriteIds (id) VALUES ';
		let values = [];
		data.forEach((item, index) => {
			query += '(?)';
			if (index < data.length - 1) {
				query += ',';
			}
			values.push(item);
		});

		return new Promise((resolve, reject) => {
			this.db.transaction((tx) => {
				tx.executeSql(
					query,
					values,
					(tx, results) => {
						resolve(results);
					},
					this.errorCallback
				);
			});
		});
	}

	deleteItem(id: number): Promise<SQLite.SQLResultSet> {
		return new Promise((resolve, reject) => {
			this.db.transaction((tx) => {
				tx.executeSql(
					'DELETE FROM favoriteIds WHERE id = ?',
					[id],
					(tx, results) => {
						resolve(results);
					},
					this.errorCallback
				);
			});
		});
	}

	createTable(): Promise<SQLite.SQLResultSet> {
		return new Promise((resolve, reject) => {
			this.db.transaction((tx) => {
				tx.executeSql(
					`create table if not exists favoriteIds (
						id integer primary key not null
					);`,
					[],
					(tx, results) => {
						resolve(results);
					},
					this.errorCallback
				);
			});
		});
	}

	getData(): Promise<{id: number}[]> {
		return new Promise((resolve, reject) => {
			this.db.transaction((tx) => {
				tx.executeSql(
					'SELECT * FROM favoriteIds',
					[],
					(tx, results) => {
						let data = [];
						for (let i = 0; i < results.rows.length; i++) {
							data.push(results.rows.item(i));
						}
						resolve(data as {id: number}[]);
					},
					this.errorCallback
				);
			});
		});
	}

	checkIfIdExists(id: number): Promise<boolean> {
		return new Promise((resolve, reject) => {
			this.db.transaction((tx) => {
				tx.executeSql(
					'SELECT EXISTS(SELECT 1 FROM favoriteIds WHERE id = ?)',
					[id],
					(tx, results) => {
						const row = results.rows.item(0);

						resolve(Object.values(row)[0] === 1);
					},
					this.errorCallback
				);
			});
		});
	}
}