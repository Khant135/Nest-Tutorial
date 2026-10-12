import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service.js';

@Injectable()
export class DiskService {
    constructor(private readonly powerService: PowerService) {}

    getData() {
        this.powerService.supplyPower(50); // Example usage
        return 'Disk data';
    }

}
