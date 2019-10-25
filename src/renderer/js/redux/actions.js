import Uuid from 'uuid/v4';

/*
 * Action types.
 */
export const ADD_ENTRY = 'ADD_ENTRY';
export const DELETE_ENTRY = 'DELETE_ENTRY';
export const UPDATE_ENTRY = 'UPDATE_ENTRY';

/*
 * Action creators.
 */
export function addEntry(name, time, racer = 0) {
  return {
    type: ADD_ENTRY,
    name: name,
    time: time,
    racer: racer,
    uuid: Uuid(),
  };
}

export function deleteEntry(uuid) {
  return {
    type: DELETE_ENTRY,
    uuid,
  };
}

export function updateEntry(uuid, name, time, racer) {
  return {
    type: UPDATE_ENTRY,
    uuid,
    name,
    time,
    racer
  };
}

