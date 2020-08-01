'use strict';
const debug = require('debug')('gpgfs-model.mount-point')

const BouncerModel = require('@dataparty/bouncer-model')
const Utils = BouncerModel.Utils


class MountPoint extends BouncerModel.Model {

  static get Type () { return 'mount_point' }

  static get Schema(){
    return {
      created: Utils.created,
      mount: {
        automount: Boolean,
        mountpoint: String,
        lastused: Date,
        buckets: [{
          automount: Boolean,
          lastused: Date,
          name: String
        }]
      }
    }
  }
}


module.exports = MountPoint