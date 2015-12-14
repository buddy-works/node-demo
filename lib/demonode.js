/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *jshint
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';
function DemoNode(){

    /**
     * @param {number} v1
     * @param {number} v2
     * @return {*}
     */
    this.add = function(v1, v2){
        if (typeof(v1) !== 'number'){
            throw new Error('v1 is not a number');
        }
        if (typeof(v2) !== 'number'){
            throw new Error('v2 is not a number');
        }
        return v1 + v2;
    };

    /**
     * @param {number} v1
     * @param {number} v2
     * @return {number}
     */
    this.sub = function(v1, v2){
        if (typeof(v1) !== 'number'){
            throw new Error('v1 is not a number');
        }
        if (typeof(v2) !== 'number'){
            throw new Error('v2 is not a number');
        }
        return v1 - v2;
    };
}
module.exports = new DemoNode();