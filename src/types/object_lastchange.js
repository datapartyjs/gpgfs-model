'use strict';
const debug = require('debug')('gpgfs-model.object-lastchange')

const BouncerModel = require('@dataparty/bouncer-model')
const Utils = BouncerModel.Utils


class ObjectLastchange extends BouncerModel.Model {

  static get Type () { return 'object_lastchange' }

  static get Schema(){
    return {
      bucketId: Utils.actor('bucket_meta'),
      objectId: Utils.actor('object_meta'),
      lastchanged: Utils.created,
      size: Number,
      md5sum: Utils.string(32,32),
      actor: String
    }
  }

}


module.exports = ObjectLastchange