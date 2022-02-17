export const serialize = (type, payload) => {
  return JSON.stringify({ type, payload });
};

export const deserialize = (message) => {
  return JSON.parse(message);
};

export const sendToServer = (websocketRef, type, payload) => {
  const messageString = serialize(type, payload);
  websocketRef.current.sendMessage(messageString);
};
