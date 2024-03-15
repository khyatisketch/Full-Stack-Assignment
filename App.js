import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [selectedNode, setSelectedNode] = useState(null);

  const handleNodeHover = (node) => {
    setSelectedNode(node);
  };

  const handleNodeLeave = () => {
    setSelectedNode(null);
  };

  const renderNode = (node, childNodes = []) => (
    <div
      key={node}
      className='node'
      onMouseEnter={() => handleNodeHover(node)}
      onMouseLeave={handleNodeLeave}
      >
        <span className='node-label'>{node}</span>
        {childNodes.length > 0 && (
          <div className='child-nodes'>
            {childNodes.map((childNode) => (
              <div
              key={childNode}
              className='child-node'
              onMouseEnter={() => handleNodeHover(childNode)}
              onMouseLeave={handleNodeLeave}
              >
                {childNode}
              </div>
            )
        )}
      </div>
  )
}
</div>
);

const nodes = [
  { label: 'Research', children: ['External', 'Internal'] },
  { label: 'Planning', children: ['PRD', 'Specs'] },
  { label: 'Designing', children: ['Hardware', 'Software'] },
  { label: 'Manafacturing', children: ['Material', 'Production'] },
  { label: 'Sales/Marketing', children: ['Online', 'Dealership'] },
  { label: 'External', children: ['B2C', 'B2C', 'Online', 'Interview', 'Public Data', 'Health'] },
];

return (
    <div className='app'>
      <h1 className='header'>Car Manafacturing Process</h1>
      <div className='timeline-mindmap'>
        {nodes.map(({ label, children }) => renderNode(label, children))}
      </div>
      <div className='details-panel'>
        <h2>Details</h2>
        <h4 className='details-content'>{selectedNode}</h4>
      </div>
    </div>
  );
};

export default App;