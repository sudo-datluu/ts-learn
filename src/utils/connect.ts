import mongosse from 'mongoose'
import config from 'config'
import logger from './logger'

async function connect() {
    const dbUri = config.get<string>("dbUri")
    try {
        await mongosse.connect(dbUri)
        logger.info("connect db success")
    } catch (error) {
        logger.error("fail to connect to DB");
        logger.error(error);
        process.exit(1)
    }
}

export default connect;