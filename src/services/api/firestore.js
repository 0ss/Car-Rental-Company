import * as Api from './controllers';
import * as Auth from './auth'

export async function set(collection, doc, data) {
    const result = await Api.Post('firestore/set', { collection: collection, doc: doc, data: data });
    if (result && result.result) {
        return true;
    } else {
        return false;
    }
}

export async function get(collection, doc) {
    return await Api.Post('firestore/get', { collection: collection, doc: doc, uid: Auth.getUid() });
}