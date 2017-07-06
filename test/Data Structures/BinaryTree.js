var chai = require('chai');
var expect = require('chai').expect;

var BinaryTree = require('../../Data Structures/BinaryTree');

describe('Binary Tree', function() {
    describe('insert', function() {
        it('should locate values that have been inserted', function() {
            var tree = new BinaryTree();
            tree.insert(20);
            tree.insert(10);
            tree.insert(15);

            chai.assert.equal(tree.locate(10).val, 10);
            chai.assert.equal(tree.locate(20).val, 20);
            chai.assert.equal(tree.locate(15).val, 15);
            chai.assert.equal(tree.locate(21), null);
        });
    });

    describe('remove', function() {
        it('should not find values that have been removed', function() {
            var tree = new BinaryTree();
            tree.insert(20);
            tree.insert(10);
            tree.insert(15);
            tree.remove(10);

            chai.assert.equal(tree.locate(20).val, 20);
            chai.assert.equal(tree.locate(15).val, 15);
            chai.assert.equal(tree.locate(10), null);
        });
    });

    describe('bfs', function() {
        it('should find values using Breadth First Search', function() {
            var tree = new BinaryTree();
            tree.insert(20);
            tree.insert(10);

            chai.assert.equal(tree.breadthFirstSearch(20).val, 20);
            chai.assert.equal(tree.breadthFirstSearch(10).val, 10);
        });
    });
});