"use client";

import { useState } from "react";
import {
  Bot,
  MessageSquare,
  Sparkles,
  Brain,
  Zap,
  ChevronDown,
  ChevronUp,
  Send,
  Wand2,
  Target,
  Lightbulb,
} from "lucide-react";

const aiFeatures = [
  {
    icon: MessageSquare,
    title: "AI Assistant",
    description: "Answer your questions and provide helpful assistance",
    action: "chat",
  },
  {
    icon: Sparkles,
    title: "Content Generator",
    description: "Create creative content and generate text",
    action: "generate",
  },
  {
    icon: Brain,
    title: "Smart Analysis",
    description: "Analyze your data and provide insights",
    action: "analyze",
  },
  {
    icon: Target,
    title: "Trend Prediction",
    description: "Predict future trends and patterns",
    action: "predict",
  },
];

export default function AIMenu() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);
  const [chatInput, setChatInput] = useState("");

  const handleFeatureClick = (feature) => {
    setActiveFeature(activeFeature === feature.action ? null : feature.action);
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (chatInput.trim()) {
      // Here you can call the AI API
      console.log("Message sent to AI:", chatInput);
      setChatInput("");
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-200/30 rounded-xl p-6 mb-6">
      {/* Header */}
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">AI Assistant</h3>
            <p className="text-sm text-muted">
              Powered by artificial intelligence
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-muted" />
          ) : (
            <ChevronDown className="w-5 h-5 text-muted" />
          )}
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="mt-6 space-y-4">
          {/* AI Features Grid */}
          <div className="grid grid-cols-2 gap-3">
            {aiFeatures.map((feature, index) => (
              <button
                key={index}
                onClick={() => handleFeatureClick(feature)}
                className={`p-4 rounded-lg border transition-all text-left hover:border-purple-300 ${
                  activeFeature === feature.action
                    ? "bg-purple-500/10 border-purple-300"
                    : "bg-background border-border hover:bg-hover"
                }`}
              >
                <div className="flex items-center space-x-2 mb-2">
                  <feature.icon className="w-4 h-4 text-purple-500" />
                  <span className="font-medium text-sm text-foreground">
                    {feature.title}
                  </span>
                </div>
                <p className="text-xs text-muted">{feature.description}</p>
              </button>
            ))}
          </div>

          {/* Quick Chat */}
          <div className="bg-background border border-border rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-3">
              <MessageSquare className="w-4 h-4 text-purple-500" />
              <span className="font-medium text-sm text-foreground">
                Quick Chat
              </span>
            </div>

            <form onSubmit={handleChatSubmit} className="flex space-x-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask AI a question..."
                className="flex-1 bg-transparent border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder-muted focus:outline-none focus:border-purple-400"
              />
              <button
                type="submit"
                disabled={!chatInput.trim()}
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-2 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Quick Actions */}
          <div className="flex space-x-2">
            <button className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity flex items-center justify-center space-x-2">
              <Wand2 className="w-4 h-4" />
              <span>Magic Suggestions</span>
            </button>
            <button className="flex-1 bg-background border border-border text-foreground py-2 px-4 rounded-lg text-sm font-medium hover:bg-hover transition-colors flex items-center justify-center space-x-2">
              <Lightbulb className="w-4 h-4" />
              <span>Tips</span>
            </button>
          </div>

          {/* Active Feature Content */}
          {activeFeature && (
            <div className="bg-purple-500/5 border border-purple-200/30 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Zap className="w-4 h-4 text-purple-500" />
                <span className="font-medium text-sm text-foreground">
                  {aiFeatures.find((f) => f.action === activeFeature)?.title}{" "}
                  Active
                </span>
              </div>
              <p className="text-xs text-muted">
                This feature will be available soon. For now, you can use the
                quick chat feature.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
