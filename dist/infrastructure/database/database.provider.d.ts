import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';
export declare const DATA_SOURCE = "DATA_SOURCE";
export declare const databaseProviders: {
    provide: string;
    inject: (typeof ConfigService)[];
    useFactory: (configService: ConfigService) => Promise<DataSource>;
}[];
