'use strict';
const debug = require('debug')('gpgfs-model.object-meta')

const BouncerModel = require('@dataparty/bouncer-model')
const Utils = BouncerModel.Utils


class ObjectMeta extends BouncerModel.Model {

  static get Type () { return 'object_meta' }

  static get Schema(){
    return {
      owner: String,
      bucketId: Utils.actor('bucket_meta'),
      objectId: Utils.actor('object_meta'),
      created: Utils.created,
      lastchanged: Utils.created,
      path: Utils.string(300,3),
      meta: [ String ],
      readers: [ String ],
      writers: [ String ],
      cleartext: Boolean
    }
  }

}


module.exports = ObjectMeta