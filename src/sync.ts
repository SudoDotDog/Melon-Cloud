/**
 * @author WMXPY
 * @description Handler
 */

import { Callback, Context, Handler } from 'aws-lambda';
import * as AWS from 'aws-sdk';
import { Response } from './util/response';

export const hello: Handler = (event: any, context: Context, callback: Callback) => {

    const key: string = event.object;
    const response = new Response(callback);

    response.add('response', 'test');
    response.succeed();
};
