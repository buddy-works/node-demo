/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';
var expect = require('chai').expect;
var demonode = require('../lib/demonode');
describe('Demonode', function(){

    it('should be an object', function(){
       expect(demonode).to.be.an('object');
    });   

    describe('.sub()', function(){

        it('should be a function', function(){
            expect(demonode.sub).to.be.a('function');
        });

        it('should sub values', function(){
            expect(demonode.sub(3, 2)).to.equal(1);
        });

        it('should throw error when v1 is not a number', function(){
            expect(demonode.sub.bind(demonode, 'test', 2)).to.throw('v1 is not a number');
        });

        it('should throw error when v2 is not a number', function(){
            expect(demonode.sub.bind(demonode, 3, false)).to.throw('v2 is not a number');
        });

    });

});
