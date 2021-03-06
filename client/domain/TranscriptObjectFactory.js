// Copyright 2017 The TIE Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Factory for creating a transcript of a student's TIE
 * session.
 */

tie.factory('TranscriptObjectFactory', [
  function() {
    var Transcript = function() {
      this._snapshots = [];
    };

    // Instance methods.
    Transcript.prototype.getMostRecentSnapshot = function() {
      if (this._snapshots.length === 0) {
        return null;
      }
      return this._snapshots[this._snapshots.length - 1];
    };

    Transcript.prototype.recordSnapshot = function(snapshot) {
      this._snapshots.push(snapshot);
      return this._snapshots.length;
    };

    // Static class methods.
    Transcript.create = function() {
      return new Transcript();
    };

    return Transcript;
  }
]);
