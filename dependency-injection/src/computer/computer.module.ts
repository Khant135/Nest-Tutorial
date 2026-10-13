import { Module } from '@nestjs/common';
import { ComputerController } from './computer.controller.js';
import { CpuModule } from '../cpu/cpu.module.js';
import { DiskModule } from '../disk/disk.module.js';

@Module({
  controllers: [ComputerController],
  imports: [CpuModule, DiskModule]
})
export class ComputerModule {}
