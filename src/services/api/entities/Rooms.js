class Rooms {
  async fetchRooms() {
    try {
      const response = await fetch('./entities.json');
      const json = await response.json();

      return json;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export { Rooms };
