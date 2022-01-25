const resettingRoom = ({ selectedBlockId, roomIndex }, stateCopy) => {
  const { taskLog, cleaningTypeCount } = stateCopy;
  const blockIndex = taskLog.findIndex((block) => block.shortid === selectedBlockId);

  if (taskLog[blockIndex].rooms[roomIndex].cleaningType === 'daily') {
    cleaningTypeCount.daily -= 1;
  } else cleaningTypeCount.thorough -= 1;
  delete taskLog[blockIndex].rooms[roomIndex].cleaningType;
  return stateCopy;
  // removing cleaningType to reset the room
};
const roomIsCleaned = ({ selectedBlockId, roomIndex, cleaningType }, stateCopy) => {
  const { taskLog, cleaningTypeCount } = stateCopy;
  const blockIndex = taskLog.findIndex((block) => block.shortid === selectedBlockId);
  taskLog[blockIndex].rooms[roomIndex].cleaningType = cleaningType;
  if (cleaningType === 'daily') {
    cleaningTypeCount.daily += 1;
  } else cleaningTypeCount.thorough += 1;
  return stateCopy;
};

export { roomIsCleaned, resettingRoom };
