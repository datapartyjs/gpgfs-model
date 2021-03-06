'use strict';
const mongoose = require('mongoose')
const debug = require('debug')('gpgfs-model.bucket-index')

const BouncerModel = require('@dataparty/bouncer-model')
const Utils = BouncerModel.Utils


class BucketIndex extends BouncerModel.Model {

  static get Type () { return 'bucket_index' }

  static get Schema(){
    return {
      bucketId: Utils.actor('bucket_meta'),
      created: Utils.created,
      lastchanged: Utils.created,
      objects: [{
        created: Utils.created,
        objectId: Utils.actor('object_meta'),
        path: String,
        size: Number,
        lastchanged: Utils.created
      }],
      dirs:[String]
    }
  }

}


module.exports = BucketIndex