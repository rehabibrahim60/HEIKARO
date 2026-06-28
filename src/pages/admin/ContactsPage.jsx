import { useState, useEffect } from "react";
import Icon from "../../components/Admin/ui/Icon";
import ConfirmDialog from "../../components/Admin/ui/ConfirmDialog";
import { LoadingGrid, EmptyState } from "../../components/Admin/ui/LoadingGrid";
import { apiFetch, API, authHeaders } from "../../utils/api";
import { iconBtn, listCard } from "./../style/shared";

function Detail({ label, value }) {
  return (
    <div>
      <p
        style={{
          color: "#6b7280",
          fontSize: 11,
          fontWeight: 600,
          textTransform: "uppercase",
          marginBottom: 3,
          letterSpacing: 1,
        }}
      >
        {label}
      </p>
      <p style={{ color: "#f1f5f9", fontSize: 14, margin: 0 }}>
        {value || "—"}
      </p>
    </div>
  );
}

const formatDateTime = (value) => {
  if (!value) return "—";

  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "Africa/Cairo",
  }).format(new Date(value));
};

export default function ContactsPage({ toast }) {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [confirm, setConfirm] = useState(null);

  const load = async () => {
    setLoading(true);
    try {
      const data = await apiFetch("/contacts");

      const sortedContacts = (data.data || []).sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      );

      setContacts(sortedContacts);
    } catch {
      toast.show("Failed to load inquiries", "error");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    load();
  }, []);

  const deleteContact = async (id) => {
    try {
      await fetch(`${API}/contacts/${id}`, {
        method: "DELETE",
        headers: authHeaders(),
      });

      setContacts((p) => p.filter((c) => c._id !== id));
      if (selected?._id === id) setSelected(null);

      toast.show("Inquiry deleted");
    } catch {
      toast.show("Delete failed", "error");
    } finally {
      setConfirm(null);
    }
  };

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <h1
          style={{
            color: "#f1f5f9",
            fontSize: 22,
            fontWeight: 700,
            margin: "0 0 4px",
          }}
        >
          Contact Inquiries
        </h1>
        <p style={{ color: "#6b7280", fontSize: 13, margin: 0 }}>
          {contacts.length} inquiries
        </p>
      </div>

      {loading ? (
        <LoadingGrid />
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: selected ? "1fr 1fr" : "1fr",
            gap: 14,
          }}
        >
          {/* List */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {contacts.length === 0 && (
              <EmptyState icon="contact" label="No inquiries found" />
            )}

            {contacts.map((c) => (
              <div
                key={c._id}
                onClick={() => setSelected(c)}
                style={{
                  ...listCard,
                  cursor: "pointer",
                  border:
                    selected?._id === c._id
                      ? "1px solid #22d3ee"
                      : "1px solid #1f2937",
                }}
              >
                {/* Avatar */}
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    background: "#083344",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#22d3ee",
                    fontWeight: 700,
                    fontSize: 14,
                    flexShrink: 0,
                  }}
                >
                  {(c.fullName || c.workEmail || "?")[0].toUpperCase()}
                </div>

                {/* Main */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p
                    style={{
                      color: "#f1f5f9",
                      fontWeight: 600,
                      fontSize: 14,
                      margin: "0 0 2px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {c.fullName || "—"}
                  </p>
                  <p
                    style={{
                      color: "#6b7280",
                      fontSize: 12,
                      margin: 0,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {c.workEmail}
                  </p>
                </div>

                {/* Actions */}
                <div
                  style={{
                    display: "flex",
                    gap: 6,
                    flexShrink: 0,
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      color: "#6b7280",
                      fontSize: 11,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {formatDateTime(c.createdAt)}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setConfirm(c._id);
                    }}
                    style={{ ...iconBtn, color: "#f87171", padding: 4 }}
                  >
                    <Icon name="trash" size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Details Panel */}
          {selected && (
            <div
              style={{
                background: "#111827",
                border: "1px solid #1f2937",
                borderRadius: 14,
                padding: 24,
                position: "sticky",
                top: 80,
                alignSelf: "start",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 20,
                }}
              >
                <p
                  style={{
                    color: "#22d3ee",
                    fontSize: 13,
                    fontWeight: 600,
                    margin: 0,
                  }}
                >
                  Inquiry Details
                </p>
                <button onClick={() => setSelected(null)} style={iconBtn}>
                  <Icon name="x" size={16} />
                </button>
              </div>

              <div
                style={{ display: "flex", flexDirection: "column", gap: 14 }}
              >
                <Detail label="Full Name" value={selected.fullName} />
                <Detail label="Organization" value={selected.organization} />
                <Detail label="Work Email" value={selected.workEmail} />
                <Detail label="Service Family" value={selected.serviceFamily} />
                <Detail
                  label="Specific Solution"
                  value={selected.specificSolution}
                />
                <Detail
                  label="Received At"
                  value={formatDateTime(selected.createdAt)}
                />

                <div>
                  <p
                    style={{
                      color: "#6b7280",
                      fontSize: 11,
                      fontWeight: 600,
                      textTransform: "uppercase",
                      marginBottom: 6,
                      letterSpacing: 1,
                    }}
                  >
                    Inquiry Brief
                  </p>
                  <p
                    style={{
                      color: "#f1f5f9",
                      fontSize: 14,
                      lineHeight: 1.7,
                      background: "#0f172a",
                      padding: 14,
                      borderRadius: 8,
                      margin: 0,
                    }}
                  >
                    {selected.inquiryBrief}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {confirm && (
        <ConfirmDialog
          message="Are you sure you want to delete this inquiry?"
          onConfirm={() => deleteContact(confirm)}
          onCancel={() => setConfirm(null)}
        />
      )}
    </div>
  );
}
