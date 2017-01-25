import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
    private apiBaseUrl = 'https://jsonplaceholder.typicode.com/posts';

    constructor() { }

    public getApiUrl( ):string{
        return this.apiBaseUrl;
    }
}