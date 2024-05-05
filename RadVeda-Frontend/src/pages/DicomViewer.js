import {
  RenderingEngine,
  Types,
  Enums,
  getRenderingEngine,
} from '@cornerstonejs/core';

import initDemo from './helpers/helpers/initDemo';
import createImageIdsAndCacheMetaData from './helpers/helpers/createImageIdsAndCacheMetaData';
import setTitleAndDescription from './helpers/helpers/setTitleAndDescription';
import addDropDownToToolbar from './helpers/helpers/addDropdownToToolbar';
import addButtonToToolbar from './helpers/helpers/addButtonToToolbar';

import * as cornerstoneTools from '@cornerstonejs/tools';
import { useEffect, useState } from 'react';

const DicomViewer = () => {
  const {
    LengthTool,
    ProbeTool,
    RectangleROITool,
    EllipticalROITool,
    CircleROITool,
    BidirectionalTool,
    AngleTool,
    CobbAngleTool,
    ToolGroupManager,
    ArrowAnnotateTool,
    PlanarFreehandROITool,
    EraserTool,
    KeyImageTool,
    Enums: csToolsEnums,
  } = cornerstoneTools;

  const areToolsInitialized = () => {
    // Check if the initialization flag is set in localStorage
    return localStorage.getItem('isToolsInitialized') === 'true';
  };

  const [istoolsInitialized, setToolsInitialized] = useState(areToolsInitialized());




  useEffect(() => {
    const { ViewportType, Events } = Enums;
    const { MouseBindings } = csToolsEnums;
    const renderingEngineId = 'myRenderingEngine';
    const viewportId = 'CT_STACK';

    const content = document.getElementById('content');
    const element = document.createElement('div');
    const display_element = document.getElementsByClassName("annotely-image-1-icon")[0];

    // Disable right click context menu so we can have right click tools
    element.oncontextmenu = (e) => e.preventDefault();
    
    element.id = 'cornerstone-element';
    element.style.width = '500px';
    element.style.height = '500px';
    
    content.appendChild(element);
    
    const info = document.createElement('div');
    content.appendChild(info);
    
    const instructions = document.createElement('p');
    instructions.innerText = 'Left Click to use selected tool';
    info.appendChild(instructions);
    
    const rotationInfo = document.createElement('div');
    info.appendChild(rotationInfo);
    
    const flipHorizontalInfo = document.createElement('div');
    info.appendChild(flipHorizontalInfo);
    
    const flipVerticalInfo = document.createElement('div');
    info.appendChild(flipVerticalInfo);
    
    element.addEventListener(Events.CAMERA_MODIFIED, (_) => {
      const renderingEngine = getRenderingEngine(renderingEngineId);
      const viewport = renderingEngine.getViewport(viewportId);
    
      if (!viewport) {
        return;
      }
    
      const { flipHorizontal, flipVertical } = viewport.getCamera();
      const { rotation } = viewport.getProperties();
    
      rotationInfo.innerText = `Rotation: ${Math.round(rotation)}`;
      flipHorizontalInfo.innerText = `Flip horizontal: ${flipHorizontal}`;
      flipVerticalInfo.innerText = `Flip vertical: ${flipVertical}`;
    });
    // ============================= //
    
    const toolGroupId = 'STACK_TOOL_GROUP_ID';
    
    const cancelToolDrawing = (evt) => {
      const { element, key } = evt.detail;
      if (key === 'Escape') {
        cornerstoneTools.cancelActiveManipulations(element);
      }
    };
    
    element.addEventListener(csToolsEnums.Events.KEY_DOWN, (evt) => {
      cancelToolDrawing(evt);
    });
    
    const toolsNames = [
      LengthTool.toolName,
      ProbeTool.toolName,
      RectangleROITool.toolName,
      EllipticalROITool.toolName,
      CircleROITool.toolName,
      BidirectionalTool.toolName,
      AngleTool.toolName,
      CobbAngleTool.toolName,
      ArrowAnnotateTool.toolName,
      PlanarFreehandROITool.toolName,
      EraserTool.toolName,
      KeyImageTool.toolName,
    ];
    let selectedToolName = toolsNames[0];
    
    addDropDownToToolbar({
      options: { values: toolsNames, defaultValue: selectedToolName },
      onSelectedValueChange: (newSelectedToolNameAsStringOrNumber) => {
        const newSelectedToolName = String(newSelectedToolNameAsStringOrNumber);
        const toolGroup = ToolGroupManager.getToolGroup(toolGroupId);
    
        toolGroup.setToolActive(newSelectedToolName, {
          bindings: [
            {
              mouseButton: MouseBindings.Primary,
            },
          ],
        });
    
        toolGroup.setToolPassive(selectedToolName);
    
        selectedToolName = newSelectedToolName;
      },
    });
    
    const addToolButton = (title, onClick) => {
      addButtonToToolbar({
        title,
        onClick,
      });
    };
    
    addToolButton('Flip H', () => {
      const renderingEngine = getRenderingEngine(renderingEngineId);
      const viewport = renderingEngine.getViewport(viewportId);
      const { flipHorizontal } = viewport.getCamera();
      viewport.setCamera({ flipHorizontal: !flipHorizontal });
      viewport.render();
    });
    
    addToolButton('Flip V', () => {
      const renderingEngine = getRenderingEngine(renderingEngineId);
      const viewport = renderingEngine.getViewport(viewportId);
      const { flipVertical } = viewport.getCamera();
      viewport.setCamera({ flipVertical: !flipVertical });
      viewport.render();
    });
    
    addToolButton('Rotate Delta 90', () => {
      const renderingEngine = getRenderingEngine(renderingEngineId);
      const viewport = renderingEngine.getViewport(viewportId);
      const { rotation } = viewport.getProperties();
      viewport.setProperties({ rotation: rotation + 90 });
      viewport.render();
    });
    

    
    /**
     * Runs the demo
     */
    async function run() {
      // Init Cornerstone and related libraries
      await initDemo();

      
      // Add tools to Cornerstone3D
      if(istoolsInitialized){
        const toolGroup = ToolGroupManager.getToolGroup(toolGroupId);
        const imageIds = ["wadouri:https://radveda.s3.ap-south-1.amazonaws.com/0015.DCM"];
    
        // Instantiate a rendering engine
        const renderingEngine = new RenderingEngine(renderingEngineId);
      
        // Create a stack viewport
        const viewportInput = {
          viewportId,
          type: ViewportType.STACK,
          element,
          defaultOptions: {
            background: [0.2, 0, 0.2],
          },
        };

        const viewportInput1 = {
          viewportId,
          type: ViewportType.STACK,
          display_element,
          defaultOptions: {
            background: [0.2, 0, 0.2],
          },
        };

        renderingEngine.enableElement(viewportInput);
        // renderingEngine.enableElement(viewportInput1);

  
        toolGroup.addViewport(viewportId, renderingEngineId);
      
        const viewport = renderingEngine.getViewport(viewportId);
      
        const stack = [imageIds[0]];
      
        viewport.setStack(stack);
      
        viewport.render();
      }

      if(!istoolsInitialized){
        cornerstoneTools.addTool(LengthTool);
        cornerstoneTools.addTool(ProbeTool);
        cornerstoneTools.addTool(RectangleROITool);
        cornerstoneTools.addTool(EllipticalROITool);
        cornerstoneTools.addTool(CircleROITool);
        cornerstoneTools.addTool(BidirectionalTool);
        cornerstoneTools.addTool(AngleTool);
        cornerstoneTools.addTool(CobbAngleTool);
        cornerstoneTools.addTool(ArrowAnnotateTool);
        cornerstoneTools.addTool(PlanarFreehandROITool);
        cornerstoneTools.addTool(EraserTool);
        cornerstoneTools.addTool(KeyImageTool);

        const toolGroup = ToolGroupManager.createToolGroup(toolGroupId);
    
        // Add the tools to the tool group
        toolGroup.addTool(LengthTool.toolName);
        toolGroup.addTool(ProbeTool.toolName);
        toolGroup.addTool(RectangleROITool.toolName);
        toolGroup.addTool(EllipticalROITool.toolName);
        toolGroup.addTool(CircleROITool.toolName);
        toolGroup.addTool(BidirectionalTool.toolName);
        toolGroup.addTool(AngleTool.toolName);
        toolGroup.addTool(CobbAngleTool.toolName);
        toolGroup.addTool(ArrowAnnotateTool.toolName);
        toolGroup.addTool(PlanarFreehandROITool.toolName);
        toolGroup.addTool(EraserTool.toolName);
        toolGroup.addTool(KeyImageTool.toolName);

        toolGroup.setToolActive(toolsNames[0], {
          bindings: [
            {
              mouseButton: MouseBindings.Primary, // Left Click
            },
          ],
        });
        // We set all the other tools passive here, this means that any state is rendered, and editable
        // But aren't actively being drawn (see the toolModes example for information)
        toolGroup.setToolPassive(ProbeTool.toolName);
        toolGroup.setToolPassive(RectangleROITool.toolName);
        toolGroup.setToolPassive(EllipticalROITool.toolName);
        toolGroup.setToolPassive(CircleROITool.toolName);
        toolGroup.setToolPassive(BidirectionalTool.toolName);
        toolGroup.setToolPassive(AngleTool.toolName);
        toolGroup.setToolPassive(ArrowAnnotateTool.toolName);
        toolGroup.setToolPassive(PlanarFreehandROITool.toolName);
        toolGroup.setToolPassive(EraserTool.toolName);
      
        toolGroup.setToolConfiguration(PlanarFreehandROITool.toolName, {
          calculateStats: true,
        });

        const imageIds = ["wadouri:https://radveda.s3.ap-south-1.amazonaws.com/0015.DCM"];
    
        // Instantiate a rendering engine
        const renderingEngine = new RenderingEngine(renderingEngineId);
      
        // Create a stack viewport
        const viewportInput = {
          viewportId,
          type: ViewportType.STACK,
          element,
          defaultOptions: {
            background: [0.2, 0, 0.2],
          },
        };
      
        renderingEngine.enableElement(viewportInput);
  
        toolGroup.addViewport(viewportId, renderingEngineId);
      
        const viewport = renderingEngine.getViewport(viewportId);
      
        const stack = [imageIds[0]];
      
        viewport.setStack(stack);
      
        viewport.render();
        localStorage.setItem('isToolsInitialized', 'true');
        setToolsInitialized(true);
      }

      
      // Define a tool group, which defines how mouse events map to tool commands for
      // Any viewport using the group

    
      // Set the initial state of the tools, here we set one tool active on left click.
      // This means left click will draw that tool.


      // Get Cornerstone imageIds and fetch metadata into RAM
      // const imageIds = await createImageIdsAndCacheMetaData({
      //   StudyInstanceUID:
      //     '1.3.6.1.4.1.14519.5.2.1.7009.2403.334240657131972136850343327463',
      //   SeriesInstanceUID:
      //     '1.3.6.1.4.1.14519.5.2.1.7009.2403.226151125820845824875394858561',
      //   wadoRsRoot: 'https://d3t6nz73ql33tx.cloudfront.net/dicomweb',
      // });


      
    }

    run();
  }, []);


  return (
    <div>
      <h2>Basic Demo</h2>
      <div id='demo-toolbar'></div>
      <div id='content'>

      </div>
      
    </div>
  );
};

export default DicomViewer;
