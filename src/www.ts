import app from './app'    
import { config } from './config';

app.listen(config.port, () => {
    console.log(`** ðŸš€ App running at port ${config.port} **`);
});