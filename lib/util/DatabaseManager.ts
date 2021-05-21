import mongoose from 'mongoose';
import consola from 'consola';

class DatabaseManager {
	constructor(private connectionUri: string) {}

	async connect() {
		await mongoose.connect(
			this.connectionUri,
			{
				useCreateIndex: true,
				useFindAndModify: true,
				useNewUrlParser: true,
				useUnifiedTopology: true,
			},
			(err) => {
				if (err) return consola.error(err);
				consola.success(
					'Database connection has been established successfully.'
				);
			}
		);
	}
}

export default DatabaseManager;
