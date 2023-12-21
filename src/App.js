import { QueryClient, QueryClientProvider } from "react-query";
import AppLayout from "./layouts/AppLayout";

let queryClient=new QueryClient()
function App() {
  return(
    <QueryClientProvider client={queryClient}>
      <AppLayout />
    </QueryClientProvider>
  ) 
}

export default App;
