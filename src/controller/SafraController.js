import BaseController from './BaseController.js';
import SafraService from '../service/SafraService.js';

class SafraController extends BaseController {
    constructor() {
        super(SafraService, 'safra');
    }  
}

export default new SafraController();