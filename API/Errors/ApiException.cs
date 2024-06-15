namespace API.Errors
{
    public class ApiException : ApiResponse
    {
        //to format the normal exception to a customize one.
        public ApiException(int statusCode, string message = null, string details = null) : base(statusCode, message)
        {
            Details = details;
        }

        public string Details {get; set;}
    }
}