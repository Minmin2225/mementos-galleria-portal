import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Dashboard = () => {
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/");
      }
    };
    checkAuth();
  }, [navigate]);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("Error signing out");
    } else {
      toast.success("Signed out successfully");
      navigate("/");
    }
  };

  const handleFeedbackSubmit = async () => {
    if (!feedback.trim()) {
      toast.error("Feedback cannot be empty");
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("feedback").insert([{ text: feedback }]);
    setSubmitting(false);
    if (error) {
      toast.error("Error submitting feedback");
    } else {
      toast.success("Feedback submitted successfully");
      setFeedback("");
    }
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Welcome to Mement</h1>
          <Button variant="secondary" onClick={handleSignOut}>
            Sign Out
          </Button>
        </div>
        <div className="glass p-6 rounded-lg">
          <p className="text-xl text-gray-300 mb-4">
            This is your personal dashboard. More features coming soon!
          </p>
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-2">Leave Feedback</h2>
            <textarea
              className="w-full p-2 bg-gray-800 border border-gray-600 rounded-lg text-white"
              rows="4"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Share your thoughts..."
            ></textarea>
            <Button
              variant="primary"
              className="mt-2"
              onClick={handleFeedbackSubmit}
              disabled={submitting}
            >
              {submitting ? "Submitting..." : "Submit Feedback"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
