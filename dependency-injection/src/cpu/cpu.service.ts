import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service.js';

@Injectable()
export class CpuService {
    constructor(private readonly powerService: PowerService) {}

    compute(a: number, b: number) {
        this.powerService.supplyPower(100); // Example usage
        return a + b;
    }

}
