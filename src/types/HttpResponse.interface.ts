export default interface HttpResponse<T> {
  status: "success";
  data: T;
  message?: string;
}
