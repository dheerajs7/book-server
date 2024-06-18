import { adminController } from "../controllers/adminController";

import router from 'router';

router.post('/postdata',adminController.storeAdmin);