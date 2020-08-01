'use strict';
const debug = require('debug')('gpgfs-model.volume-meta')

const BouncerModel = require('@dataparty/bouncer-model')
const Utils = BouncerModel.Utils


class VolumeMeta extends BouncerModel.Model {

  static get Type () { return 'volume_meta' }

  static get Schema(){
    return {
      name: String,
      volumeId: Utils.actor('volume_meta'),
      volumeName: Utils.string(64, 2),
      created: Utils.created,
      storage: {
        type: String,   //! fs, gce, sftp
        readOnly: Boolean,
        options: {
          fs: {
            path: String //! typically ~/.gpgshare/{{actor}}/storage/...
          },
          gce: {
            bucketName: String,
            path: String,
            location: String,
            storageClass: String,
            credentials: String,
            projectId: String,
            keyFilename: String
          },
          sftp: {
            host: String,
            port: Number,
            user: String,
            path: String,
            agent: String
          }
        }
      },
      buckets: [{
        owner: String,
        bucketId: Utils.actor('bucket_meta'),
        bucketName: Utils.string(64, 2)
      }]
    }
  }
}


module.exports = VolumeMeta