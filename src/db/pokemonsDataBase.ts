import * as SQLite from 'expo-sqlite';
import { Pokemon, PokemonDB } from '../types/pokemon';

export class PokemonsDatabase {
	private static instance: PokemonsDatabase;
	private db: SQLite.SQLiteDatabase;

	private constructor() {
		this.db = SQLite.openDatabase('pokemon.db');
	}

	static getInstance(): PokemonsDatabase {
		if (!PokemonsDatabase.instance) {
			PokemonsDatabase.instance = new PokemonsDatabase();
		}
		return PokemonsDatabase.instance;
	}

	private errorCallback(tx: SQLite.SQLTransaction, error: SQLite.SQLError): boolean {
		// Manejar el error aquí
		console.error('An error occurred:', error.message);
		// Devolver true para continuar la transacción o false para deshacerla
		return false;
	}

	insertData(data: Pokemon[]) {
		let query = 'INSERT INTO pokemons (id,height,name,sprite,types,weight,stats,abilities,moves,color) VALUES ';
		let values: (number | string)[] = [];
	
		data.forEach((item, index) => {
			query += '(?,?,?,?,?,?,?,?,?,?)';
			if (index < data.length - 1) {
				query += ',';
			}
			values.push(item.id);
			values.push(item.height);
			values.push(item.name);
			values.push(JSON.stringify(item.sprites));
			values.push(JSON.stringify(item.types));
			values.push(item.weight);
			values.push(JSON.stringify(item.stats));
			values.push(JSON.stringify(item.abilities));
			values.push(JSON.stringify(item.moves));
			values.push(item.color);
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
	};

	deleteItem(id: number) {
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
	};

	getData = (): Promise<PokemonDB[]> => {
		const data: PokemonDB[] = [];
		
		return new Promise((resolve, reject) => {
			this.db.transaction((tx) => {
				tx.executeSql(
					'SELECT * FROM pokemons',
					[],
					(tx, results) => {
						for (let i = 0; i < results.rows.length; i++) {
							data.push({
								abilities: results.rows.item(i).abilities,
								color: results.rows.item(i).color,
								height: results.rows.item(i).height,
								id: results.rows.item(i).id,
								moves: results.rows.item(i).moves,
								name: results.rows.item(i).name,
								sprite: results.rows.item(i).sprite,
								stats: results.rows.item(i).stats,
								types: results.rows.item(i).types,
								weight: results.rows.item(i).weight,
							});
						}
						resolve(data);
					},
					this.errorCallback
				);
			});
		});
	};

	deleteData() {
		return new Promise((resolve, reject) => {
			this.db.transaction((tx) => {
				tx.executeSql(
					'DROP TABLE IF EXISTS pokemons',
					[],
					(tx, results) => {
						resolve(results);
					},
					this.errorCallback
				)
			});
		});
	};

	createTable() {
		return new Promise((resolve, reject) => {
			this.db.transaction(tx => {
				tx.executeSql(
					`create table if not exists pokemons (
						id integer primary key not null,
						height integer,
						name text,
						sprite text,
						types text,
						weight integer,
						stats text,
						abilities text,
						moves text,
						color text
					);`,
					[],
					(tx, results) => {
						resolve(results)
					},
					this.errorCallback
				);
			});
		}
	)}
}