import http from "../http-common";
const getAll = () => {
  return http.get("/viewAll");
};
const get = busId => {
  return http.get(`/viewBus/${busId}`);
};
const getBusByType = busType => {
  return http.get(`/viewBusByType/${busType}`);
};
const create = data => {
  return http.post("/", data);
};
const update = (busId, data) => {
  return http.put(`/${busId}`, data);
};
const remove = busId => {
  return http.delete(`/${busId}`);
};
/* any other service or queries or sorting or features which you want to add
const removeAll = () => {
  return http.delete(`/tutorials`);
};
const findByTitle = title => {
  return http.get(`/tutorials?title=${title}`);
};*/
const BusService = {
  getAll,
  get,
  getBusByType,
  create,
  update,
  remove,
  //removeAll,
  //findByTitle
  //you can add more actions here
};
export default BusService;