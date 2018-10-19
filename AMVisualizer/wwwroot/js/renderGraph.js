
var DIR = '/refresh-cl/';
var EDGE_LENGTH_MAIN = 150;
var EDGE_LENGTH_SUB = 50;


// create an array with nodes
var nodes = new vis.DataSet([
    { id: 1, label: 'Node 1', title: 'I have a popup!', image: DIR + 'Network-Pipe-icon.png', shape: 'image' },
    { id: 2, label: 'Node 2', title: 'I have a popup!', image: DIR + 'Network-Pipe-icon.png', shape: 'image' },
    { id: 3, label: 'Node 3', title: 'I have a popup!', image: DIR + 'Network-Pipe-icon.png', shape: 'image' },
    { id: 4, label: 'Node 4', title: 'I have a popup!', image: DIR + 'Network-Pipe-icon.png', shape: 'image' },
    { id: 5, label: 'Node 5', title: 'I have a popup!', image: DIR + 'Network-Pipe-icon.png', shape: 'image' }
]);

// create an array with edges
var edges = new vis.DataSet([
    { from: 1, to: 3, length: EDGE_LENGTH_MAIN },
    { from: @ViewBag.Data[0], to: @ViewBag.Data[1], length: EDGE_LENGTH_MAIN },
    { from: 2, to: 4, length: EDGE_LENGTH_MAIN },
    { from: 2, to: 5, length: EDGE_LENGTH_MAIN },
    { from: 3, to: 4, length: EDGE_LENGTH_MAIN }
        ]);

// create a network
var container = document.getElementById('mynetwork');
var data = {
    nodes: nodes,
    edges: edges
};

var options = {
    layout: {
        hierarchical: {
            direction: "UD",
            sortMethod: "directed"
        }
    },
    physics: {
        enabled: false
    },
    interaction: {
        hover: true,
        dragNodes: true
    },
    manipulation: {
        enabled: true
    },
    configure: {
        filter: function (option, path) {
            if (path.indexOf('hierarchical') !== -1) {
                return true;
            }
            return false;
        },
        showButton: false
    }
};

var network = new vis.Network(container, data, options);

network.on("click", function (params) {
    params.event = "[original event]";
    //alert('test:' + JSON.stringify(params
    //alert('table:' + document.getElementById('t'));

    document.getElementById('eventSpan').innerHTML = '<h2>Click event:</h2>' + JSON.stringify(params, null, 4);

});
network.on("doubleClick", function (params) {
    params.event = "[original event]";
    document.getElementById('eventSpan').innerHTML = '<h2>doubleClick event:</h2>' + JSON.stringify(params, null, 4);
});
network.on("oncontext", function (params) {
    params.event = "[original event]";
    document.getElementById('eventSpan').innerHTML = '<h2>oncontext (right click) event:</h2>' + JSON.stringify(params, null, 4);
});
network.on("dragStart", function (params) {
    // There's no point in displaying this event on screen, it gets immediately overwritten
    params.event = "[original event]";
    console.log('dragStart Event:', params);
    console.log('dragStart event, getNodeAt returns: ' + this.getNodeAt(params.pointer.DOM));
});
network.on("dragging", function (params) {
    params.event = "[original event]";
    document.getElementById('eventSpan').innerHTML = '<h2>dragging event:</h2>' + JSON.stringify(params, null, 4);
});
network.on("dragEnd", function (params) {
    params.event = "[original event]";
    document.getElementById('eventSpan').innerHTML = '<h2>dragEnd event:</h2>' + JSON.stringify(params, null, 4);
    console.log('dragEnd Event:', params);
    console.log('dragEnd event, getNodeAt returns: ' + this.getNodeAt(params.pointer.DOM));
});
network.on("zoom", function (params) {
    var test;
    //debugger;
    console.log('zoom Event:', params);
    document.getElementById('eventSpan').innerHTML = '<h2>zoom event:</h2>' + JSON.stringify(params, null, 4);
});
network.on("showPopup", function (params) {
    //alert(params);
    //var myCell = document.getElementById('thiselem');//указываем элемент в который вставляем данные
    //myCell.innerHTML = params.nodes[0];

    document.getElementById('eventSpan').innerHTML = '<h2>showPopup event: </h2>' + JSON.stringify(params, null, 4);
});
network.on("hidePopup", function () {
    console.log('hidePopup Event');
});
network.on("select", function (params) {
    console.log('select Event:', params);
});
network.on("selectNode", function (params) {
    console.log('selectNode Event:', params);
});
network.on("selectEdge", function (params) {
    console.log('selectEdge Event:', params);
});
network.on("deselectNode", function (params) {
    console.log('deselectNode Event:', params);
});
network.on("deselectEdge", function (params) {
    console.log('deselectEdge Event:', params);
});
network.on("hoverNode", function (params) {
    console.log('hoverNode Event:', params);
});
network.on("hoverEdge", function (params) {
    console.log('hoverEdge Event:', params);
});
network.on("blurNode", function (params) {
    console.log('blurNode Event:', params);
});
network.on("blurEdge", function (params) {
    console.log('blurEdge Event:', params);
});