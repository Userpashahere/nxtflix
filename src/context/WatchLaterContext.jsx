import { createContext, useContext, useState, useEffect } from "react";

const WatchLaterContext = createContext();

const STORAGE_KEY = "nxtflix_watch_later";

const getInitialWatchLater = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    return [];
  }
};

export const WatchLaterProvider = ({ children }) => {
  const [watchLater, setWatchLater] = useState(getInitialWatchLater);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(watchLater));
  }, [watchLater]);

  const isInWatchLater = (id) => {
    return watchLater.some((movie) => movie.id === id);
  };

  const toggleWatchLater = (movie) => {
    setWatchLater((prev) => {
      const exists = prev.some((m) => m.id === movie.id);
      if (exists) {
        return prev.filter((m) => m.id !== movie.id);
      }
      return [...prev, movie];
    });
  };

  const value = {
    watchLater,
    isInWatchLater,
    toggleWatchLater,
  };

  return (
    <WatchLaterContext.Provider value={value}>
      {children}
    </WatchLaterContext.Provider>
  );
};

export const useWatchLater = () => {
  const context = useContext(WatchLaterContext);
  if (!context) {
    throw new Error("useWatchLater must be used within a WatchLaterProvider");
  }
  return context;
};