import connection from "./connection.mjs";
import empty from "is-empty";
import mongo from "mongoose";

let conn = null;

export default {
    set:async (obj, type, ...rest)=>{
        return new Promise( function (resolve, reject) {
            let out = (obj) => {
                resolve(obj)
            }
            let err = (error) => {
                console.log('~~~ err  ~~~', error)
                reject(error)
            }
            switch (obj['type']) {
                case 'item':
                    (async (obj, props,data)=>{
                        try {
                            if (conn == null) {
                                conn =   await connection('init')
                                conn['dex'].model('dex', new mongo.Schema({ 'dex': Object, 'id': String, 'object': String }));
                            }else{
                                try {
                                    conn['dex'].model('dex', new mongo.Schema({ 'dex': Object, 'id': String, 'object': String }));
                                } catch (error) {

                                }
                            }
                            let M = conn['dex'].model('dex');
                            out(await M.create(obj['data']))
                        } catch (e) { err(e) }
                    })( obj, type, rest)
                    break
                default:
                    break

            }
        })
    },
    get:async (obj, type, ...rest)=>{
        return new Promise( function (resolve, reject) {
            let out = (obj) => {
                resolve(obj)
            }
            let err = (error) => {
                console.log('~~~ err  ~~~', error)
                reject(error)
            }
            switch (obj['type']) {
                case 'items':
                    (async (obj, props,data)=>{
                        try {
                                let M = {}
                                if (conn == null) {
                                    conn = await connection('init')

                                    try {
                                        conn['dex'].model('dex', new mongo.Schema({ 'dex': Object, 'id': String, 'object': String }));
                                    } catch (error) {

                                    }
                                }else{
                                    try {
                                        conn['dex'].model('dex', new mongo.Schema({ 'dex': Object, 'id': String, 'object': String }));
                                    } catch (error) {

                                    }
                                }

                                M = conn['dex'].model('dex');

                                M.find()
                                    .exec()
                                    .then(news => {

                                        out(news)
                                    })
                        } catch (e) { err(e) }
                    })( obj, type, rest)
                    break
                default:
                    break

            }
        })
    }
}
