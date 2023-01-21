import express from 'express';
import BaseController from '../base/controller';

export default class DefaultController extends BaseController {
    public constructor(path: string){
        super(path);
    }
}