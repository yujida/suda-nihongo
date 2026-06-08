import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import TopicCardPage from "./pages/TopicCardPage";
import ExpressionsPage from "./pages/ExpressionsPage";
import GrammarPage from "./pages/GrammarPage";
import ErrorFixPage from "./pages/ErrorFixPage";
import DialoguePage from "./pages/DialoguePage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/topic/:id" component={TopicCardPage} />
      <Route path="/expressions" component={ExpressionsPage} />
      <Route path="/grammar" component={GrammarPage} />
      <Route path="/error-fix" component={ErrorFixPage} />
      <Route path="/dialogue" component={DialoguePage} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
