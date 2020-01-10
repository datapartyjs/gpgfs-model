'use strict';
const debug = require('debug')('gpgfs-model.bucket-meta')

const BouncerModel = require('@dataparty/bouncer-model')
const Utils = BouncerModel.Utils


class BucketMeta extends BouncerModel.Model {

  static get Type () { return 'bucket_meta' }

  static get Schema(){
    return {
      owner: String,
      bucketId: Utils.actor('bucket_meta'),
      bucketName: Utils.string(64, 2),
      created: Utils.created,
      lastchanged: Utils.created,
      cleartext: Boolean,
      meta: [ String ],         //! Keys used by metadata services who can read **ALL** object metadata
      readers: [ String ],    //! Keys used by users who can read **ALL** bucket-index and objects
      writers: [ String ],    //! Keys used by users who can write **ALL** bucket-index objects
    }
  }

}


module.exports = BucketMeta