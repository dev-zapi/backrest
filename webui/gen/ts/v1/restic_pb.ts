// @generated by protoc-gen-es v2.5.2 with parameter "target=ts"
// @generated from file v1/restic.proto (package v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file v1/restic.proto.
 */
export const file_v1_restic: GenFile = /*@__PURE__*/
  fileDesc("Cg92MS9yZXN0aWMucHJvdG8SAnYxIrcBCg5SZXN0aWNTbmFwc2hvdBIKCgJpZBgBIAEoCRIUCgx1bml4X3RpbWVfbXMYAiABKAMSEAoIaG9zdG5hbWUYAyABKAkSEAoIdXNlcm5hbWUYBCABKAkSDAoEdHJlZRgFIAEoCRIOCgZwYXJlbnQYBiABKAkSDQoFcGF0aHMYByADKAkSDAoEdGFncxgIIAMoCRIkCgdzdW1tYXJ5GAkgASgLMhMudjEuU25hcHNob3RTdW1tYXJ5IqgCCg9TbmFwc2hvdFN1bW1hcnkSEQoJZmlsZXNfbmV3GAEgASgDEhUKDWZpbGVzX2NoYW5nZWQYAiABKAMSGAoQZmlsZXNfdW5tb2RpZmllZBgDIAEoAxIQCghkaXJzX25ldxgEIAEoAxIUCgxkaXJzX2NoYW5nZWQYBSABKAMSFwoPZGlyc191bm1vZGlmaWVkGAYgASgDEhIKCmRhdGFfYmxvYnMYByABKAMSEgoKdHJlZV9ibG9icxgIIAEoAxISCgpkYXRhX2FkZGVkGAkgASgDEh0KFXRvdGFsX2ZpbGVzX3Byb2Nlc3NlZBgKIAEoAxIdChV0b3RhbF9ieXRlc19wcm9jZXNzZWQYCyABKAMSFgoOdG90YWxfZHVyYXRpb24YDCABKAEiOwoSUmVzdGljU25hcHNob3RMaXN0EiUKCXNuYXBzaG90cxgBIAMoCzISLnYxLlJlc3RpY1NuYXBzaG90In0KE0JhY2t1cFByb2dyZXNzRW50cnkSLwoGc3RhdHVzGAEgASgLMh0udjEuQmFja3VwUHJvZ3Jlc3NTdGF0dXNFbnRyeUgAEiwKB3N1bW1hcnkYAiABKAsyGS52MS5CYWNrdXBQcm9ncmVzc1N1bW1hcnlIAEIHCgVlbnRyeSKZAQoZQmFja3VwUHJvZ3Jlc3NTdGF0dXNFbnRyeRIUCgxwZXJjZW50X2RvbmUYASABKAESEwoLdG90YWxfZmlsZXMYAiABKAMSEwoLdG90YWxfYnl0ZXMYAyABKAMSEgoKZmlsZXNfZG9uZRgEIAEoAxISCgpieXRlc19kb25lGAUgASgDEhQKDGN1cnJlbnRfZmlsZRgGIAMoCSLDAgoVQmFja3VwUHJvZ3Jlc3NTdW1tYXJ5EhEKCWZpbGVzX25ldxgBIAEoAxIVCg1maWxlc19jaGFuZ2VkGAIgASgDEhgKEGZpbGVzX3VubW9kaWZpZWQYAyABKAMSEAoIZGlyc19uZXcYBCABKAMSFAoMZGlyc19jaGFuZ2VkGAUgASgDEhcKD2RpcnNfdW5tb2RpZmllZBgGIAEoAxISCgpkYXRhX2Jsb2JzGAcgASgDEhIKCnRyZWVfYmxvYnMYCCABKAMSEgoKZGF0YV9hZGRlZBgJIAEoAxIdChV0b3RhbF9maWxlc19wcm9jZXNzZWQYCiABKAMSHQoVdG90YWxfYnl0ZXNfcHJvY2Vzc2VkGAsgASgDEhYKDnRvdGFsX2R1cmF0aW9uGAwgASgBEhMKC3NuYXBzaG90X2lkGA0gASgJIkQKE0JhY2t1cFByb2dyZXNzRXJyb3ISDAoEaXRlbRgBIAEoCRIOCgZkdXJpbmcYAiABKAkSDwoHbWVzc2FnZRgDIAEoCSK1AQoUUmVzdG9yZVByb2dyZXNzRW50cnkSFAoMbWVzc2FnZV90eXBlGAEgASgJEhcKD3NlY29uZHNfZWxhcHNlZBgCIAEoARITCgt0b3RhbF9ieXRlcxgDIAEoAxIWCg5ieXRlc19yZXN0b3JlZBgEIAEoAxITCgt0b3RhbF9maWxlcxgFIAEoAxIWCg5maWxlc19yZXN0b3JlZBgGIAEoAxIUCgxwZXJjZW50X2RvbmUYByABKAEijQEKCVJlcG9TdGF0cxISCgp0b3RhbF9zaXplGAEgASgDEh8KF3RvdGFsX3VuY29tcHJlc3NlZF9zaXplGAIgASgDEhkKEWNvbXByZXNzaW9uX3JhdGlvGAMgASgBEhgKEHRvdGFsX2Jsb2JfY291bnQYBSABKAMSFgoOc25hcHNob3RfY291bnQYBiABKANCLFoqZ2l0aHViLmNvbS9nYXJldGhnZW9yZ2UvYmFja3Jlc3QvZ2VuL2dvL3YxYgZwcm90bzM");

/**
 * ResticSnapshot represents a restic snapshot.
 *
 * @generated from message v1.ResticSnapshot
 */
export type ResticSnapshot = Message<"v1.ResticSnapshot"> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: int64 unix_time_ms = 2;
   */
  unixTimeMs: bigint;

  /**
   * @generated from field: string hostname = 3;
   */
  hostname: string;

  /**
   * @generated from field: string username = 4;
   */
  username: string;

  /**
   * tree hash
   *
   * @generated from field: string tree = 5;
   */
  tree: string;

  /**
   * parent snapshot's id
   *
   * @generated from field: string parent = 6;
   */
  parent: string;

  /**
   * @generated from field: repeated string paths = 7;
   */
  paths: string[];

  /**
   * @generated from field: repeated string tags = 8;
   */
  tags: string[];

  /**
   * added in 0.17.0 restic outputs the summary in the snapshot
   *
   * @generated from field: v1.SnapshotSummary summary = 9;
   */
  summary?: SnapshotSummary;
};

/**
 * Describes the message v1.ResticSnapshot.
 * Use `create(ResticSnapshotSchema)` to create a new message.
 */
export const ResticSnapshotSchema: GenMessage<ResticSnapshot> = /*@__PURE__*/
  messageDesc(file_v1_restic, 0);

/**
 * @generated from message v1.SnapshotSummary
 */
export type SnapshotSummary = Message<"v1.SnapshotSummary"> & {
  /**
   * @generated from field: int64 files_new = 1;
   */
  filesNew: bigint;

  /**
   * @generated from field: int64 files_changed = 2;
   */
  filesChanged: bigint;

  /**
   * @generated from field: int64 files_unmodified = 3;
   */
  filesUnmodified: bigint;

  /**
   * @generated from field: int64 dirs_new = 4;
   */
  dirsNew: bigint;

  /**
   * @generated from field: int64 dirs_changed = 5;
   */
  dirsChanged: bigint;

  /**
   * @generated from field: int64 dirs_unmodified = 6;
   */
  dirsUnmodified: bigint;

  /**
   * @generated from field: int64 data_blobs = 7;
   */
  dataBlobs: bigint;

  /**
   * @generated from field: int64 tree_blobs = 8;
   */
  treeBlobs: bigint;

  /**
   * @generated from field: int64 data_added = 9;
   */
  dataAdded: bigint;

  /**
   * @generated from field: int64 total_files_processed = 10;
   */
  totalFilesProcessed: bigint;

  /**
   * @generated from field: int64 total_bytes_processed = 11;
   */
  totalBytesProcessed: bigint;

  /**
   * @generated from field: double total_duration = 12;
   */
  totalDuration: number;
};

/**
 * Describes the message v1.SnapshotSummary.
 * Use `create(SnapshotSummarySchema)` to create a new message.
 */
export const SnapshotSummarySchema: GenMessage<SnapshotSummary> = /*@__PURE__*/
  messageDesc(file_v1_restic, 1);

/**
 * ResticSnapshotList represents a list of restic snapshots.
 *
 * @generated from message v1.ResticSnapshotList
 */
export type ResticSnapshotList = Message<"v1.ResticSnapshotList"> & {
  /**
   * @generated from field: repeated v1.ResticSnapshot snapshots = 1;
   */
  snapshots: ResticSnapshot[];
};

/**
 * Describes the message v1.ResticSnapshotList.
 * Use `create(ResticSnapshotListSchema)` to create a new message.
 */
export const ResticSnapshotListSchema: GenMessage<ResticSnapshotList> = /*@__PURE__*/
  messageDesc(file_v1_restic, 2);

/**
 * BackupProgressEntriy represents a single entry in the backup progress stream.
 *
 * @generated from message v1.BackupProgressEntry
 */
export type BackupProgressEntry = Message<"v1.BackupProgressEntry"> & {
  /**
   * @generated from oneof v1.BackupProgressEntry.entry
   */
  entry: {
    /**
     * @generated from field: v1.BackupProgressStatusEntry status = 1;
     */
    value: BackupProgressStatusEntry;
    case: "status";
  } | {
    /**
     * @generated from field: v1.BackupProgressSummary summary = 2;
     */
    value: BackupProgressSummary;
    case: "summary";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message v1.BackupProgressEntry.
 * Use `create(BackupProgressEntrySchema)` to create a new message.
 */
export const BackupProgressEntrySchema: GenMessage<BackupProgressEntry> = /*@__PURE__*/
  messageDesc(file_v1_restic, 3);

/**
 * BackupProgressStatusEntry represents a single status entry in the backup progress stream.
 *
 * @generated from message v1.BackupProgressStatusEntry
 */
export type BackupProgressStatusEntry = Message<"v1.BackupProgressStatusEntry"> & {
  /**
   * See https://restic.readthedocs.io/en/stable/075_scripting.html#id1
   *
   * 0.0 - 1.0
   *
   * @generated from field: double percent_done = 1;
   */
  percentDone: number;

  /**
   * @generated from field: int64 total_files = 2;
   */
  totalFiles: bigint;

  /**
   * @generated from field: int64 total_bytes = 3;
   */
  totalBytes: bigint;

  /**
   * @generated from field: int64 files_done = 4;
   */
  filesDone: bigint;

  /**
   * @generated from field: int64 bytes_done = 5;
   */
  bytesDone: bigint;

  /**
   * @generated from field: repeated string current_file = 6;
   */
  currentFile: string[];
};

/**
 * Describes the message v1.BackupProgressStatusEntry.
 * Use `create(BackupProgressStatusEntrySchema)` to create a new message.
 */
export const BackupProgressStatusEntrySchema: GenMessage<BackupProgressStatusEntry> = /*@__PURE__*/
  messageDesc(file_v1_restic, 4);

/**
 * BackupProgressSummary represents a the summary event emitted at the end of a backup stream.
 *
 * @generated from message v1.BackupProgressSummary
 */
export type BackupProgressSummary = Message<"v1.BackupProgressSummary"> & {
  /**
   * See https://restic.readthedocs.io/en/stable/075_scripting.html#summary
   *
   * @generated from field: int64 files_new = 1;
   */
  filesNew: bigint;

  /**
   * @generated from field: int64 files_changed = 2;
   */
  filesChanged: bigint;

  /**
   * @generated from field: int64 files_unmodified = 3;
   */
  filesUnmodified: bigint;

  /**
   * @generated from field: int64 dirs_new = 4;
   */
  dirsNew: bigint;

  /**
   * @generated from field: int64 dirs_changed = 5;
   */
  dirsChanged: bigint;

  /**
   * @generated from field: int64 dirs_unmodified = 6;
   */
  dirsUnmodified: bigint;

  /**
   * @generated from field: int64 data_blobs = 7;
   */
  dataBlobs: bigint;

  /**
   * @generated from field: int64 tree_blobs = 8;
   */
  treeBlobs: bigint;

  /**
   * @generated from field: int64 data_added = 9;
   */
  dataAdded: bigint;

  /**
   * @generated from field: int64 total_files_processed = 10;
   */
  totalFilesProcessed: bigint;

  /**
   * @generated from field: int64 total_bytes_processed = 11;
   */
  totalBytesProcessed: bigint;

  /**
   * @generated from field: double total_duration = 12;
   */
  totalDuration: number;

  /**
   * @generated from field: string snapshot_id = 13;
   */
  snapshotId: string;
};

/**
 * Describes the message v1.BackupProgressSummary.
 * Use `create(BackupProgressSummarySchema)` to create a new message.
 */
export const BackupProgressSummarySchema: GenMessage<BackupProgressSummary> = /*@__PURE__*/
  messageDesc(file_v1_restic, 5);

/**
 * @generated from message v1.BackupProgressError
 */
export type BackupProgressError = Message<"v1.BackupProgressError"> & {
  /**
   * See https://restic.readthedocs.io/en/stable/075_scripting.html#error
   *
   * @generated from field: string item = 1;
   */
  item: string;

  /**
   * @generated from field: string during = 2;
   */
  during: string;

  /**
   * @generated from field: string message = 3;
   */
  message: string;
};

/**
 * Describes the message v1.BackupProgressError.
 * Use `create(BackupProgressErrorSchema)` to create a new message.
 */
export const BackupProgressErrorSchema: GenMessage<BackupProgressError> = /*@__PURE__*/
  messageDesc(file_v1_restic, 6);

/**
 * RestoreProgressEvent represents a single entry in the restore progress stream.
 *
 * @generated from message v1.RestoreProgressEntry
 */
export type RestoreProgressEntry = Message<"v1.RestoreProgressEntry"> & {
  /**
   * "summary" or "status"
   *
   * @generated from field: string message_type = 1;
   */
  messageType: string;

  /**
   * @generated from field: double seconds_elapsed = 2;
   */
  secondsElapsed: number;

  /**
   * @generated from field: int64 total_bytes = 3;
   */
  totalBytes: bigint;

  /**
   * @generated from field: int64 bytes_restored = 4;
   */
  bytesRestored: bigint;

  /**
   * @generated from field: int64 total_files = 5;
   */
  totalFiles: bigint;

  /**
   * @generated from field: int64 files_restored = 6;
   */
  filesRestored: bigint;

  /**
   * 0.0 - 1.0
   *
   * @generated from field: double percent_done = 7;
   */
  percentDone: number;
};

/**
 * Describes the message v1.RestoreProgressEntry.
 * Use `create(RestoreProgressEntrySchema)` to create a new message.
 */
export const RestoreProgressEntrySchema: GenMessage<RestoreProgressEntry> = /*@__PURE__*/
  messageDesc(file_v1_restic, 7);

/**
 * @generated from message v1.RepoStats
 */
export type RepoStats = Message<"v1.RepoStats"> & {
  /**
   * @generated from field: int64 total_size = 1;
   */
  totalSize: bigint;

  /**
   * @generated from field: int64 total_uncompressed_size = 2;
   */
  totalUncompressedSize: bigint;

  /**
   * @generated from field: double compression_ratio = 3;
   */
  compressionRatio: number;

  /**
   * @generated from field: int64 total_blob_count = 5;
   */
  totalBlobCount: bigint;

  /**
   * @generated from field: int64 snapshot_count = 6;
   */
  snapshotCount: bigint;
};

/**
 * Describes the message v1.RepoStats.
 * Use `create(RepoStatsSchema)` to create a new message.
 */
export const RepoStatsSchema: GenMessage<RepoStats> = /*@__PURE__*/
  messageDesc(file_v1_restic, 8);

